interface Session {
    category: string;
    subject: string;
    time: number;
}

interface Link {
    name: string;
    url: string;
}

export type { Session, Link }