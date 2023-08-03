import { environment } from '../../configs/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITweetRequest, ITweetResponse } from '../dto/tweet.dto';

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
}