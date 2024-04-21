// Imports use relative file paths or Node.js package names
import './styles/styles.css';
import {initNav} from "./utility.ts";
import {pauseTimer, startTimer} from "./timer.ts";
import {pauseBtnEl, startBtnEl} from "./dom-utils.ts";

initNav();

startBtnEl.addEventListener("click", startTimer);
pauseBtnEl.addEventListener("click", pauseTimer);