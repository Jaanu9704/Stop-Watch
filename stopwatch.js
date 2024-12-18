// script.js
let timer;
let elapsedTime = 0;
let isRunning = false;

const timeDisplay = document.querySelector('.time-display');
const lapsList = document.getElementById('laps-list');

function formatTime(ms) {
  const date = new Date(ms);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

function updateTime() {
  elapsedTime += 10;
  timeDisplay.textContent = formatTime(elapsedTime);
}

document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 10);
  }
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;
  timeDisplay.textContent = '00:00:00';
  lapsList.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  if (isRunning) {
    const lapTime = formatTime(elapsedTime);
    const li = document.createElement('li');
    li.textContent = `Lap: ${lapTime}`;
    lapsList.appendChild(li);
  }
});
