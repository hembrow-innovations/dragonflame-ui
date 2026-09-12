use std::ffi::{c_char, c_int, c_void, CString};
use std::ptr::{self, NonNull};
use std::sync::atomic::{AtomicBool, AtomicPtr, AtomicU32, Ordering};
use std::thread;

use raw_window_handle::{
    AndroidDisplayHandle, AndroidNdkWindowHandle, DisplayHandle, HandleError, HasDisplayHandle,
    HasWindowHandle, RawDisplayHandle, RawWindowHandle, WindowHandle,
};

type JNIEnv = *mut c_void;
type JObject = *mut c_void;

static WINDOW: AtomicPtr<c_void> = AtomicPtr::new(ptr::null_mut());
static WIDTH: AtomicU32 = AtomicU32::new(0);
static HEIGHT: AtomicU32 = AtomicU32::new(0);
static DONE: AtomicBool = AtomicBool::new(false);

struct AndroidGpuSurface {
    window: NonNull<c_void>,
}

unsafe impl Send for AndroidGpuSurface {}
unsafe impl Sync for AndroidGpuSurface {}

impl HasWindowHandle for AndroidGpuSurface {
    fn window_handle(&self) -> Result<WindowHandle<'_>, HandleError> {
        Ok(unsafe {
            WindowHandle::borrow_raw(RawWindowHandle::AndroidNdk(AndroidNdkWindowHandle::new(
                self.window,
            )))
        })
    }
}

impl HasDisplayHandle for AndroidGpuSurface {
    fn display_handle(&self) -> Result<DisplayHandle<'_>, HandleError> {
        Ok(unsafe { DisplayHandle::borrow_raw(RawDisplayHandle::Android(AndroidDisplayHandle::new())) })
    }
}

#[link(name = "android")]
extern "C" {
    fn ANativeWindow_fromSurface(env: JNIEnv, surface: JObject) -> *mut c_void;
    fn ANativeWindow_release(window: *mut c_void);
    fn ANativeWindow_getWidth(window: *mut c_void) -> i32;
    fn ANativeWindow_getHeight(window: *mut c_void) -> i32;
    fn AChoreographer_getInstance() -> *mut c_void;
    fn AChoreographer_postFrameCallback(
        choreographer: *mut c_void,
        callback: extern "C" fn(i64, *mut c_void),
        data: *mut c_void,
    );
}

#[link(name = "log")]
extern "C" {
    fn __android_log_write(prio: c_int, tag: *const c_char, text: *const c_char) -> c_int;
}

fn line(text: &str) {
    let tag = CString::new("dragonflame").expect("tag");
    let msg = CString::new(text).expect("log");
    unsafe {
        __android_log_write(4, tag.as_ptr(), msg.as_ptr());
    }
    println!("{text}");
}

extern "C" fn on_vsync(_frame_time_nanos: i64, _data: *mut c_void) {
    if DONE.swap(true, Ordering::SeqCst) {
        return;
    }
    let Some(window) = NonNull::new(WINDOW.load(Ordering::SeqCst)) else {
        line("missing-window");
        std::process::exit(1);
    };
    let mut width = WIDTH.load(Ordering::SeqCst);
    let mut height = HEIGHT.load(Ordering::SeqCst);
    unsafe {
        width = width.max(ANativeWindow_getWidth(window.as_ptr()).max(0) as u32);
        height = height.max(ANativeWindow_getHeight(window.as_ptr()).max(0) as u32);
    }
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
    line("counter-text 0");
    line(&format!("draw-list {}", engine::recorded_draw_list().len()));
    line(&format!("default-host {}", engine::recorded_host()));
    let surface = AndroidGpuSurface { window };
    thread::spawn(move || {
        line("present-start");
        match engine::present_one_vsync(&surface, width.max(1), height.max(1)) {
            Ok(()) => {
                line("gpu-surface");
                line("vsync");
                std::process::exit(0);
            }
            Err(err) => {
                line(&format!("gpu-present-failed {err}"));
                std::process::exit(1);
            }
        }
    });
}

#[no_mangle]
pub extern "C" fn Java_ui_dragonflame_host_MainActivity_onNativeSurface(
    env: JNIEnv,
    _this: JObject,
    surface: JObject,
    width: c_int,
    height: c_int,
) {
    unsafe {
        let window = ANativeWindow_fromSurface(env, surface);
        if window.is_null() {
            line("missing-anativewindow");
            std::process::exit(1);
        }
        let prev = WINDOW.swap(window, Ordering::SeqCst);
        if !prev.is_null() && prev != window {
            ANativeWindow_release(prev);
        }
        WIDTH.store(width.max(0) as u32, Ordering::SeqCst);
        HEIGHT.store(height.max(0) as u32, Ordering::SeqCst);
        let choreographer = AChoreographer_getInstance();
        AChoreographer_postFrameCallback(choreographer, on_vsync, ptr::null_mut());
    }
}
