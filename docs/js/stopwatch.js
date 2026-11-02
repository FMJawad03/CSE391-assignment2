let elapsedSeconds = 0;
let timerId = null;

const timeDisplay = document.getElementById("timeDisplay");
const timerMessage = document.getElementById("timerMessage");

function showTime() {
    timeDisplay.textContent = elapsedSeconds + " seconds";
}

document.getElementById("startButton").addEventListener("click", function () {
    if (timerId !== null || elapsedSeconds >= 30) {
        return;
    }

    timerMessage.textContent = "Stopwatch is running.";

    timerId = setInterval(function () {
        elapsedSeconds = elapsedSeconds + 3;
        showTime();

        if (elapsedSeconds >= 30) {
            clearInterval(timerId);
            timerId = null;
            timerMessage.textContent = "Finished! Press Reset to start again.";
        }
    }, 1000);
});

document.getElementById("stopButton").addEventListener("click", function () {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
        timerMessage.textContent = "Paused. Press Start to resume.";
    }
});

document.getElementById("resetButton").addEventListener("click", function () {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }

    elapsedSeconds = 0;
    showTime();
    timerMessage.textContent = "Reset. Press Start to begin.";
});

showTime();