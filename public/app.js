window.onload = function () {

let stopwatch = document.querySelector('.stopwatch');
let minutes = 0;
let seconds = 0;
let interval;

function start() {
  clearInterval(interval);
  interval = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    display();
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  display();
}

function display() {
  stopwatch.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);
}
