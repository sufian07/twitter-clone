import { environment } from '../../configs/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMyTweetsResponse, ITimeLineResponse, ITweetRequest, ITweetResponse } from '../dto/tweet.dto';
import { IUsersResponse } from '../dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    // public createTwitter(dto:ITweetRequest): Observable<ITweetResponse> {
    //   return this.http.post<ITweetResponse>(
    //     `${environment.API_BASE_URL}/${environment.TWEET}`,
    //     dto
    //     );
    // }

    public users(): Observable<IUsersResponse> {
      return this.http.get<IUsersResponse>(
        `${environment.API_BASE_URL}/${environment.USERS}`
        );
    }
}