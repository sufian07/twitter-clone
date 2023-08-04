import { IUser } from "./user.dto";

export interface ITweetRequest {
    content: string;
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
export interface ITimeLineResponse {
    count: number;
    timeline: Array<ITweet>;
}
export interface IMyTweetsResponse {
    count: number;
    my_tweets: Array<ITweet>;
}
export interface IUserTweetsResponse {
    count: number;
    tweets: Array<ITweet>;
}

