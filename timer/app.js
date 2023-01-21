const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const clearButton = document.querySelector("#clear");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, clearButton, {
  onStart(totalDuration) {
    duration = totalDuration;
    console.log("Timer started");
  },
  onTick(timeRemaining) {
    const offset = perimeter * timeRemaining / duration - perimeter;
    circle.style.strokeDashoffset = offset;
    console.log("Ticked");
  },
  onComplete() {
    console.log("Completed");
  },
  onClear(timeRemaining) {
    circle.style.strokeDashoffset = this.timeRemaining;
    console.log("Cleared");
  }
});