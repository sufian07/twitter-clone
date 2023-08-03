import { environment } from '../../configs/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMyTweetsResponse, ITimeLineResponse, ITweetRequest, ITweetResponse } from '../dto/tweet.dto';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
    constructor(private http: HttpClient) {}

    public createTwitter(dto:ITweetRequest): Observable<ITweetResponse> {
      return this.http.post<ITweetResponse>(
        `${environment.API_BASE_URL}/${environment.TWEET}`,
        dto
        );
    }

    public timeline(): Observable<ITimeLineResponse> {
      return this.http.get<ITimeLineResponse>(
        `${environment.API_BASE_URL}/${environment.TIMELINE}`
        );
    }
    public myTweets(): Observable<IMyTweetsResponse> {
      return this.http.get<IMyTweetsResponse>(
        `${environment.API_BASE_URL}/${environment.MY_TWEETS}`
        );
    }
}