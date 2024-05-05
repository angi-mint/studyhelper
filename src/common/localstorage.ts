import {Link, Session} from "./interfaces.ts";
import { popUp } from "./utility.ts";

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

function getTimes(items: Array<string>, property: keyof Session): Array<number> {
    let times: Array<number> = Array(items.length).fill(0);

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

function getCategoryTimes(): Array<number> {
    const categories: Array<string> = settings("category");
    return getTimes(categories, 'category');
}

function getSubjectTimes(): Array<number> {
    const subjects: Array<string> = settings("subject");
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

function getLinks(subject: string): Array<Link> {
    if (!localStorage.getItem(`link-${subject}`)) return [];
    return JSON.parse(localStorage.getItem(`link-${subject}`) as string);
}

function settings(key: string, value?: string): Array<string> {
    if (key !== 'category' && key !== 'subject') {
        popUp('Invalid key!');
        return [];
    }
    const items: Array<string> = JSON.parse(localStorage.getItem(key) as string || '[]');

    if (value) {
        if (!items.includes(value)) {
            items.push(value);
            localStorage.setItem(key, JSON.stringify(items));
            popUp(`${value} added!`)
        } else {
            popUp(`${key} already exists!`);
        }
    }
    return items;
}

export {
    saveSession, totalTimeSpent,
    setLink, getLinks,
    settings, getCategoryTimes, getSubjectTimes
}