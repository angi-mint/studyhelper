import {
    startBtnEl, pauseBtnEl, stopBtnEl,
    timerMinEl, timerSecEl,
    categoryEl, subjectEl, linkBox, selectMessage
} from "../common/dom-utils.ts";
import {generateLinkList} from "../common/utility.ts";
import {saveSession, settings} from "../common/localstorage.ts";

const timeMin: number = Number(timerMinEl.textContent);
const timeSec: number= Number(timerSecEl.textContent);

let interval: number;
const start: Array<number> = [timeMin, timeSec];

let minutes: number = timeMin;
let seconds: number = timeSec;

function toggleState(elements: Array<HTMLSelectElement> ) {
    elements.forEach(element => {
        element.disabled = !element.disabled;
    });
}

function formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}

function startTimer() {
    startBtnEl.disabled = true;

    pauseBtnEl.disabled = false;
    stopBtnEl.disabled = false;
    toggleState([categoryEl, subjectEl])
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
    pauseBtnEl.disabled = true;
    startBtnEl.disabled = false;

    clearInterval(interval)
}

function stopTimer() {
    // enable start, disable pause and stop and clear the interval
    stopBtnEl.disabled = true;

    toggleState([categoryEl, subjectEl]);
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

function updateLinks() {
    const ul = generateLinkList(subjectEl.value)
    linkBox.classList.add('link-list');
    linkBox.innerHTML = '';
    if (ul === null) {
        linkBox.innerHTML = '<ul><li><a href="/sites/linkmap.html">Create</a></li></ul>';
    } else linkBox.appendChild(ul);
}

function updateSelect() {
    const categories = settings('category');
    const subjects = settings('subject');

    if (categories.length > 0 && subjects.length > 0) {
        categoryEl.disabled = false;
        subjectEl.disabled = false;
        startBtnEl.disabled = false;
        selectMessage.innerText = '';
    }
    categories.forEach((category: string) => {
        const option = document.createElement('option');
        option.value = category;
        option.innerText = category;
        categoryEl.appendChild(option);
    });

    subjects.forEach((subject: string) => {
        const option = document.createElement('option');
        option.value = subject;
        option.innerText = subject;
        subjectEl.appendChild(option);
    });
}

export { startTimer, pauseTimer, stopTimer, updateLinks, updateSelect }