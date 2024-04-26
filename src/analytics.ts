import './styles/styles.css';
import { initNav } from "./common/utility.ts";

import { getCategoryTimes, getSubjectTimes, totalTimeSpent } from "./common/localstorage.ts";
import { createPieChart } from "./analytics/chart.ts";
import { chartCategoryEl, chartSubjectEl, textCategoryEl, textSubjectEl, textTotalEl } from "./common/dom-utils.ts";

initNav();

let times: number[] = getCategoryTimes();
const labels: string[] = ['lecture', 'project', 'studying']

let subjectTimes: number[] = getSubjectTimes();
const subjects: string[] = ['t2', 't3', 'u1', 'd1', 'p1'];

const totalTime = totalTimeSpent();
if (totalTime !== 0) {
    textTotalEl.innerHTML = `You have spent a total of ${totalTime} hours studying.`
    createPieChart(chartCategoryEl, textCategoryEl, times, labels)
    createPieChart(chartSubjectEl, textSubjectEl, subjectTimes, subjects)
}