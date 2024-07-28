const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

let intervalId;
let startTime;
let elapsedTime = 0;

function startTimer() {
    startTime = Date.now();
    intervalId = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(intervalId);
    elapsedTime += Date.now() - startTime;
}

function resetTimer() {
    clearInterval(intervalId);
    elapsedTime = 0;
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';
    milliseconds.textContent = '000';
}

function updateTimer() {
    elapsedTime += 10;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const displaySeconds = totalSeconds % 60;
    const displayMinutes = totalMinutes % 60;
    const displayHours = totalHours % 24;

    const displayMilliseconds = elapsedTime % 1000;

    hours.textContent = pad(displayHours);
    minutes.textContent = pad(displayMinutes);
    seconds.textContent = pad(displaySeconds);
    milliseconds.textContent = pad(displayMilliseconds, 3);
}

function pad(num, size = 2) {
    return ('0'.repeat(size) + num).slice(-size);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
