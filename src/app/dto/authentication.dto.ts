export interface IRegistration {
    username: string;
    email: string;
    password: string;
}

export interface ILogIn {
    email: string;
    password: string;
}

export interface IToken {
    token: string;
}