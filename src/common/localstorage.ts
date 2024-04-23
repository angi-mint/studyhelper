import { Session } from "./interfaces.ts";

function toHours(timeInSec: number) {
    return timeInSec / 3600;
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
    // get all entries that have the category lecture, add all times together then do same for the other 2 categories
    let categoryTimes: number[] = [0, 0, 0];

    if (!localStorage.getItem("trackedSessions")) return categoryTimes;
    let trackedSessions: Array<Session> = JSON.parse(localStorage.getItem("trackedSessions") as string);

    trackedSessions.forEach((session: Session) => {
        if (session.category === "lecture") categoryTimes[0] += session.time;
        else if (session.category === "project") categoryTimes[1] += session.time;
        else if(session.category === "studying") categoryTimes[2] += session.time;
    });

    categoryTimes.forEach((time, index) => {
        categoryTimes[index] = toHours(time);
    });

    return categoryTimes;
}

function getSubjectTimes() {
    let subjectTimes: number[] = [0, 0, 0, 0, 0];

    if (!localStorage.getItem("trackedSessions")) return subjectTimes;
    let trackedSessions: Array<Session> = JSON.parse(localStorage.getItem("trackedSessions") as string);

    trackedSessions.forEach((session: Session) => {
        if (session.subject === "t2") subjectTimes[0] += session.time;
        else if (session.subject === "t3") subjectTimes[1] += session.time;
        else if(session.subject === "u1") subjectTimes[2] += session.time;
        else if(session.subject === "d1") subjectTimes[3] += session.time;
        else if(session.subject === "p1") subjectTimes[4] += session.time;
    });

    subjectTimes.forEach((time, index) => {
        subjectTimes[index] = toHours(time);
    });

    return subjectTimes;
}

export { saveSession, getCategoryTimes, getSubjectTimes }