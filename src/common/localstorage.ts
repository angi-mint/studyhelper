import { Session } from "./interfaces.ts";

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

export { saveSession }