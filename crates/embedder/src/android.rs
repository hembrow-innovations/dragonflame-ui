use std::ffi::c_void;

#[link(name = "android")]
extern "C" {
    fn AChoreographer_getInstance() -> *mut c_void;
    fn AChoreographer_postFrameCallback(
        choreographer: *mut c_void,
        callback: extern "C" fn(i64, *mut c_void),
        data: *mut c_void,
    );
}

extern "C" fn on_vsync(_frame_time_nanos: i64, data: *mut c_void) {
    unsafe {
        let choreographer = AChoreographer_getInstance();
        AChoreographer_postFrameCallback(choreographer, on_vsync, data);
    }
}

#[no_mangle]
pub extern "C" fn ANativeActivity_onCreate(
    _activity: *mut c_void,
    _saved_state: *mut c_void,
    _saved_state_size: usize,
) {
    unsafe {
        let choreographer = AChoreographer_getInstance();
        AChoreographer_postFrameCallback(choreographer, on_vsync, std::ptr::null_mut());
    }
}
