import {Link, Session} from "./interfaces.ts";

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

function getTimes(items: string[], property: keyof Session): number[] {
    let times: number[] = Array(items.length).fill(0);

    if (!localStorage.getItem("trackedSessions")) return times;
    let trackedSessions: Array<Session> = JSON.parse(localStorage.getItem("trackedSessions") as string);

    trackedSessions.forEach((session: Session) => {
        const index: number = items.indexOf(<string>session[property]);
        if (index !== -1) {
            times[index] += session.time;
        }
    });

    return times.map(toHours);
}

function getCategoryTimes(): number[] {
    const categories: string[] = ['lecture', 'project', 'studying'];
    return getTimes(categories, 'category');
}

function getSubjectTimes(): number[] {
    const subjects: string[] = ['t2', 't3', 'u1', 'd1', 'p1'];
    return getTimes(subjects, 'subject');
}

function totalTimeSpent(): number {
    if (!localStorage.getItem("trackedSessions")) return 0;
    let trackedSessions: Array<Session> = JSON.parse(localStorage.getItem("trackedSessions") as string);
    return toHours(trackedSessions.reduce((acc: number, session: Session) => acc + session.time, 0))
}

function setLink(subject: string, link: string, name: string) {
    if (!localStorage.getItem(`link-${subject}`)) {
        localStorage.setItem(`link-${subject}`, JSON.stringify([{ name, url: link }]));
    } else {
        let links: Array<Link> = JSON.parse(localStorage.getItem(`link-${subject}`) as string);
        links.push({ name, url: link });
        localStorage.setItem(`link-${subject}`, JSON.stringify(links));
    }
}

export { saveSession, getCategoryTimes, getSubjectTimes, totalTimeSpent, setLink }