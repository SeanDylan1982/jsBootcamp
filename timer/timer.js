class Timer {
  constructor(durationInput, startButton, pauseButton, clearButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.clearButton = clearButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
      this.onClear = callbacks.onClear;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
    this.clearButton.addEventListener("click", this.clear);
  }
  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.interval = setInterval(this.tick, 10);
    console.log("start");
  }
  pause = () => {
    clearInterval(this.interval);
    console.log("pause");
  }
  onDurationChange = () => {
    console.log("change");
  }
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining -= .01;
      console.log("tick");
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  }
  clear() {
    if (this.onClear) {
      this.onClear();
    }
    durationInput.value = 30;
    clearInterval(this.interval);
    console.log("clear");
  }
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}

colleen_brinck@kaltire.com