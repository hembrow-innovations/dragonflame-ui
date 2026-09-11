use std::ffi::{c_char, c_int, c_void};
use std::ptr;

type Id = *mut c_void;
type Sel = *const c_void;

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
struct CGPoint {
    x: f64,
    y: f64,
}

#[repr(C)]
struct CGSize {
    width: f64,
    height: f64,
}

#[repr(C)]
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
    msg0(window, b"makeKeyAndVisible\0");
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

unsafe extern "C" fn on_vsync(_this: Id, _cmd: Sel, _link: Id) {}

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
