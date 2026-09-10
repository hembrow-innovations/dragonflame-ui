use std::collections::VecDeque;
use std::sync::Mutex;

pub struct Queue {
    jobs: Mutex<VecDeque<Box<dyn FnOnce() + Send>>>,
}

impl Queue {
    pub fn new() -> Self {
        Self {
            jobs: Mutex::new(VecDeque::new()),
        }
    }

    pub fn post(&self, job: impl FnOnce() + Send + 'static) {
        self.jobs.lock().expect("jobs").push_back(Box::new(job));
    }

    pub fn run(&self) {
        loop {
            let job = self.jobs.lock().expect("jobs").pop_front();
            match job {
                Some(job) => job(),
                None => break,
            }
        }
    }
}
