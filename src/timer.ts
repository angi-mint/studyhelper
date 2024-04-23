import {
    startBtnEl, pauseBtnEl, stopBtnEl,
    timerMinEl, timerSecEl, timeMin, timeSec,
    categoryEl, subjectEl
} from "./dom-utils.ts";

let interval: number;
const start: Array<number> = [timeMin, timeSec];

let minutes: number = timeMin;
let seconds: number = timeSec;

function toggleState(elements: (HTMLButtonElement | HTMLSelectElement)[]) {
    elements.forEach(element => {
            element.disabled = !element.disabled;
    });
}

function formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}

function startTimer() {
    toggleState([startBtnEl, pauseBtnEl, stopBtnEl, categoryEl, subjectEl])
    interval = setInterval(() => {
        if (seconds != 0) {
            seconds -= 1;
            timerSecEl.innerText = formatNumber(seconds);
        } else {
            if (seconds === 0 && minutes === 0){
                stopTimer();
            } else {
                seconds = 59;
                minutes -= 1;
                timerMinEl.innerText = formatNumber(minutes);
                timerSecEl.innerText = formatNumber(seconds);
            }
        }
    }, 1000)
}

function pauseTimer() {
    toggleState([startBtnEl, pauseBtnEl]);
    clearInterval(interval)
}

function stopTimer() {
    // enable start, disable pause and stop and clear the interval
    toggleState([stopBtnEl, categoryEl, subjectEl]);
    pauseTimer();
    // reset the timer
    timerMinEl.innerText = formatNumber(start[0]);
    timerSecEl.innerText = formatNumber(start[1]);
    minutes = start[0];
    seconds = start[1];
}

export { startTimer, pauseTimer, stopTimer }