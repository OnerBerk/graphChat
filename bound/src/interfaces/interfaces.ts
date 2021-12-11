export interface User {
    firstname: string;
    id: string;
    lastname: string;
    role: string;
}

export interface Users {
    users: Array<User>;
}