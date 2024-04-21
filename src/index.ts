// Imports use relative file paths or Node.js package names
import './styles/styles.css';
import {initNav} from "./utility.ts";
import { startTimer, pauseTimer, stopTimer} from "./timer.ts";
import { startBtnEl, pauseBtnEl, stopBtnEl} from "./dom-utils.ts";

initNav();

startBtnEl.addEventListener("click", startTimer);
pauseBtnEl.addEventListener("click", pauseTimer);
stopBtnEl.addEventListener("click", stopTimer);