use std::sync::Mutex;

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum Host {
    Canvas,
}

static RECORDED_HOST: Mutex<Option<Host>> = Mutex::new(None);

fn default_host() -> Host {
    Host::Canvas
}

pub fn record_default() {
    *RECORDED_HOST.lock().expect("host") = Some(default_host());
}

pub fn recorded_host() -> &'static str {
    match RECORDED_HOST.lock().expect("host").expect("recorded") {
        Host::Canvas => "canvas",
    }
}
