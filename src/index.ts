// Imports use relative file paths or Node.js package names
import './styles/styles.css';
import {initNav} from "./utility.ts";
import {startTimer} from "./timer.ts";
import {startBtnEl} from "./dom-utils.ts";

initNav();

startBtnEl.addEventListener("click", startTimer);