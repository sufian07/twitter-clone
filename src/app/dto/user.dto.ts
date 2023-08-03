export interface IUser {
    id: number;
    active: boolean;
    email: string;
    username: string;
}
export interface IUsersResponse {
    count: number;
    users: Array<IUser>;
}

