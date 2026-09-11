use std::ffi::{c_char, c_int, c_void};
use std::io::Write;
use std::ptr::{self, NonNull};
use std::sync::atomic::{AtomicBool, AtomicPtr, Ordering};

use raw_window_handle::{
    DisplayHandle, HandleError, HasDisplayHandle, HasWindowHandle, RawDisplayHandle,
    RawWindowHandle, UiKitDisplayHandle, UiKitWindowHandle, WindowHandle,
};

type Id = *mut c_void;
type Sel = *const c_void;

static SURFACE: AtomicPtr<c_void> = AtomicPtr::new(ptr::null_mut());
static DONE: AtomicBool = AtomicBool::new(false);

struct IosGpuSurface {
    view: NonNull<c_void>,
}

unsafe impl Send for IosGpuSurface {}
unsafe impl Sync for IosGpuSurface {}

impl HasWindowHandle for IosGpuSurface {
    fn window_handle(&self) -> Result<WindowHandle<'_>, HandleError> {
        Ok(unsafe { WindowHandle::borrow_raw(RawWindowHandle::UiKit(UiKitWindowHandle::new(self.view))) })
    }
}

impl HasDisplayHandle for IosGpuSurface {
    fn display_handle(&self) -> Result<DisplayHandle<'_>, HandleError> {
        Ok(unsafe { DisplayHandle::borrow_raw(RawDisplayHandle::UiKit(UiKitDisplayHandle::new())) })
    }
}

#[link(name = "objc")]
extern "C" {
    fn objc_getClass(name: *const c_char) -> Id;
    fn objc_allocateClassPair(superclass: Id, name: *const c_char, extra_bytes: usize) -> Id;
    fn objc_registerClassPair(cls: Id);
    fn class_addMethod(cls: Id, name: Sel, imp: *const c_void, types: *const c_char) -> bool;
    fn sel_registerName(name: *const c_char) -> Sel;
    fn objc_msgSend();
}

#[link(name = "UIKit", kind = "framework")]
extern "C" {
    fn UIApplicationMain(argc: c_int, argv: *mut *mut c_char, principal: Id, delegate: Id)
        -> c_int;
}

#[link(name = "QuartzCore", kind = "framework")]
extern "C" {}

#[link(name = "Foundation", kind = "framework")]
extern "C" {
    static NSRunLoopCommonModes: Id;
}

unsafe fn cstr(bytes: &'static [u8]) -> *const c_char {
    bytes.as_ptr() as *const c_char
}

unsafe fn sel(name: &'static [u8]) -> Sel {
    sel_registerName(cstr(name))
}

unsafe fn class(name: &'static [u8]) -> Id {
    objc_getClass(cstr(name))
}

#[repr(C)]
#[derive(Clone, Copy)]
struct CGPoint {
    x: f64,
    y: f64,
}

#[repr(C)]
#[derive(Clone, Copy)]
struct CGSize {
    width: f64,
    height: f64,
}

#[repr(C)]
#[derive(Clone, Copy)]
struct CGRect {
    origin: CGPoint,
    size: CGSize,
}

unsafe fn msg0(obj: Id, name: &'static [u8]) -> Id {
    let send: unsafe extern "C" fn(Id, Sel) -> Id = std::mem::transmute(objc_msgSend as *const ());
    send(obj, sel(name))
}

unsafe fn msg1(obj: Id, name: &'static [u8], a: Id) -> Id {
    let send: unsafe extern "C" fn(Id, Sel, Id) -> Id =
        std::mem::transmute(objc_msgSend as *const ());
    send(obj, sel(name), a)
}

unsafe fn msg2(obj: Id, name: &'static [u8], a: Id, b: Id) -> Id {
    let send: unsafe extern "C" fn(Id, Sel, Id, Id) -> Id =
        std::mem::transmute(objc_msgSend as *const ());
    send(obj, sel(name), a, b)
}

unsafe fn msg_rect(obj: Id, name: &'static [u8]) -> CGRect {
    let send: unsafe extern "C" fn(Id, Sel) -> CGRect =
        std::mem::transmute(objc_msgSend as *const ());
    send(obj, sel(name))
}

unsafe fn msg_frame(obj: Id, name: &'static [u8], frame: CGRect) -> Id {
    let send: unsafe extern "C" fn(Id, Sel, CGRect) -> Id =
        std::mem::transmute(objc_msgSend as *const ());
    send(obj, sel(name), frame)
}

unsafe fn msg_f64(obj: Id, name: &'static [u8]) -> f64 {
    let send: unsafe extern "C" fn(Id, Sel) -> f64 = std::mem::transmute(objc_msgSend as *const ());
    send(obj, sel(name))
}

unsafe fn nsstring(text: &'static [u8]) -> Id {
    msg1(
        class(b"NSString\0"),
        b"stringWithUTF8String:\0",
        text.as_ptr() as Id,
    )
}

unsafe extern "C" fn did_finish_launching(this: Id, _cmd: Sel, _app: Id, _opts: Id) -> i8 {
    let bounds = msg_rect(msg0(class(b"UIScreen\0"), b"mainScreen\0"), b"bounds\0");
    let window = msg_frame(
        msg0(class(b"UIWindow\0"), b"alloc\0"),
        b"initWithFrame:\0",
        bounds,
    );
    let vc = msg0(msg0(class(b"UIViewController\0"), b"alloc\0"), b"init\0");
    let view = msg_frame(
        msg0(class(b"UIView\0"), b"alloc\0"),
        b"initWithFrame:\0",
        bounds,
    );
    msg1(vc, b"setView:\0", view);
    msg1(window, b"setRootViewController:\0", vc);
    msg0(window, b"makeKeyAndVisible\0");
    SURFACE.store(view, Ordering::SeqCst);
    let link = msg2(
        class(b"CADisplayLink\0"),
        b"displayLinkWithTarget:selector:\0",
        this,
        sel(b"onVsync:\0") as Id,
    );
    let run_loop = msg0(class(b"NSRunLoop\0"), b"mainRunLoop\0");
    msg2(
        link,
        b"addToRunLoop:forMode:\0",
        run_loop,
        NSRunLoopCommonModes,
    );
    1
}

unsafe extern "C" fn on_vsync(_this: Id, _cmd: Sel, _link: Id) {
    if DONE.swap(true, Ordering::SeqCst) {
        return;
    }
    let Some(view) = NonNull::new(SURFACE.load(Ordering::SeqCst)) else {
        std::process::exit(1);
    };
    let scale = msg_f64(msg0(class(b"UIScreen\0"), b"mainScreen\0"), b"scale\0");
    let bounds = msg_rect(view.as_ptr(), b"bounds\0");
    let width = (bounds.size.width * scale) as u32;
    let height = (bounds.size.height * scale) as u32;
    engine::submit(engine::Scene {
        max_width: 80.0,
        max_height: 40.0,
        rect: engine::Rect {
            width: 100.0,
            height: 50.0,
            color: engine::Color {
                r: 1.0,
                g: 0.0,
                b: 0.0,
                a: 1.0,
            },
        },
    });
    println!("counter-text 0");
    println!("draw-list {}", engine::recorded_draw_list().len());
    println!("default-host {}", engine::recorded_host());
    let _ = std::io::stdout().flush();
    let surface = IosGpuSurface { view };
    match engine::present_one_vsync(&surface, width, height) {
        Ok(()) => {
            println!("gpu-surface");
            println!("vsync");
            let _ = std::io::stdout().flush();
            std::process::exit(0);
        }
        Err(_) => std::process::exit(1),
    }
}

unsafe fn register_delegate() -> Id {
    let cls = objc_allocateClassPair(
        class(b"UIResponder\0"),
        cstr(b"DragonflameAppDelegate\0"),
        0,
    );
    assert!(!cls.is_null());
    assert!(class_addMethod(
        cls,
        sel(b"application:didFinishLaunchingWithOptions:\0"),
        did_finish_launching as *const () as *const c_void,
        cstr(b"B@:@@\0"),
    ));
    assert!(class_addMethod(
        cls,
        sel(b"onVsync:\0"),
        on_vsync as *const () as *const c_void,
        cstr(b"v@:@\0"),
    ));
    objc_registerClassPair(cls);
    cls
}

#[no_mangle]
pub extern "C" fn dragonflame_ios_start(argc: c_int, argv: *mut *mut c_char) {
    unsafe {
        register_delegate();
        UIApplicationMain(
            argc,
            argv,
            ptr::null_mut(),
            nsstring(b"DragonflameAppDelegate\0"),
        );
    }
}
