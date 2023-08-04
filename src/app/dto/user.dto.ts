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
export interface ISearchResponse {
    count: number;
    search_results: Array<IUser>;
}

export interface IUserFollowingResponse {
    count: number;
    followings: Array<IUser>;
}

export interface IUserFollowerResponse {
    count: number;
    followers: Array<IUser>;
}

export interface IResponse {
    resp: string
}

