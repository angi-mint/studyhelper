import {
    startBtnEl, pauseBtnEl, stopBtnEl,
    timerMinEl, timerSecEl, timeMin, timeSec,
    categoryEl, subjectEl
} from "../common/dom-utils.ts";
import { saveSession } from "../common/localstorage.ts";

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
    // get the amount of time spent on the timer in seconds
    const timeSpent = (start[0] * 60) + start[1] - (minutes * 60 + seconds);
    // save the session to local storage
    saveSession(categoryEl.value, subjectEl.value, timeSpent);
    // reset the timer
    timerMinEl.innerText = formatNumber(start[0]);
    timerSecEl.innerText = formatNumber(start[1]);
    minutes = start[0];
    seconds = start[1];
}

export { startTimer, pauseTimer, stopTimer }