import { Session } from "./interfaces.ts";

function toHours(timeInSec: number) {
    return Number((timeInSec / 3600).toFixed(2));
}

function saveSession(category: string, subject: string, timeInSec: number) {

    // if there is no entry yey, create an empty one
    if (!localStorage.getItem("trackedSessions")) localStorage.setItem("trackedSessions", "[]");

    // check if an entry already exists for the category and subject combo
    let trackedSessions: Array<Session> = JSON.parse(localStorage.getItem("trackedSessions") as string);
    const sessionIndex = trackedSessions.findIndex((session: { category: string; subject: string; }) =>
        session.category === category && session.subject === subject);

    // findIndex returns -1 if the element is not found -> add new entry, else update existing one
    if (sessionIndex === -1) {
        trackedSessions.push({ category, subject, time: timeInSec });
    } else {
        trackedSessions[sessionIndex].time += timeInSec;
    }
    localStorage.setItem('trackedSessions', JSON.stringify(trackedSessions));
}

function getCategoryTimes(): number[] {
    const categories = ['lecture', 'project', 'studying'];
    let categoryTimes: number[] = Array(categories.length).fill(0);

    if (!localStorage.getItem("trackedSessions")) return categoryTimes;
    let trackedSessions: Array<Session> = JSON.parse(localStorage.getItem("trackedSessions") as string);

    trackedSessions.forEach((session: Session) => {
        const index = categories.indexOf(session.category);
        if (index !== -1) {
            categoryTimes[index] += session.time;
        }
    });

    categoryTimes = categoryTimes.map(toHours);

    return categoryTimes;
}

function getSubjectTimes() {
    const subjects = ['t2', 't3', 'u1', 'd1', 'p1'];
    let subjectTimes: number[] = Array(subjects.length).fill(0);

    if (!localStorage.getItem("trackedSessions")) return subjectTimes;
    let trackedSessions: Array<Session> = JSON.parse(localStorage.getItem("trackedSessions") as string);

    trackedSessions.forEach((session: Session) => {
        const index = subjects.indexOf(session.subject);
        if (index !== -1) {
            subjectTimes[index] += session.time;
        }
    });

    subjectTimes = subjectTimes.map(toHours);
    return subjectTimes;
}

export { saveSession, getCategoryTimes, getSubjectTimes }