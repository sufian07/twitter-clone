export interface ITweetRequest {
    content: string;
}

export interface IUser {
    id: number;
    active: boolean;
    email: string;
    username: string;
}

export interface ITweet {
    id: number;
    content: string;
    published: string;
    user: IUser;
}


export interface ITweetResponse {
    message: string;
    tweet: ITweet;
}

