import { environment } from '../../configs/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMyTweetsResponse, ITimeLineResponse, ITweetRequest, ITweetResponse } from '../dto/tweet.dto';
import { IResponse, IUser, IUserFollowerResponse, IUserFollowingResponse, IUsersResponse } from '../dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private currentUser: Subject<IUser> = new Subject<IUser>();
    private selectedUser: Subject<IUser> = new Subject<IUser>();
    constructor(private http: HttpClient) {}

    getCurrentUser(): Subject<IUser> {
      return this.currentUser;
    }
    getSelectedUser(): Subject<IUser> {
      return this.selectedUser;
    }
  
    public users(): Observable<IUsersResponse> {
      return this.http.get<IUsersResponse>(
        `${environment.API_BASE_URL}/${environment.USERS}`
        );
    }
  
    public follow(id: string): Observable<IResponse> {
      return this.http.post<IResponse>(
        `${environment.API_BASE_URL}/${environment.FOLLOW}`,
        { 'user_id': id }
        );
    }
  
    public followers(): Observable<IUserFollowerResponse> {
      return this.http.get<IUserFollowerResponse>(
        `${environment.API_BASE_URL}/${environment.FOLLOWERS}`,
        );
    }
    public followings(): Observable<IUserFollowingResponse> {
      return this.http.get<IUserFollowingResponse>(
        `${environment.API_BASE_URL}/${environment.FOLLOWING}`,
        );
    }
  
    public unfollow(id: string): Observable<IResponse> {
      return this.http.post<IResponse>(
        `${environment.API_BASE_URL}/${environment.UNFOLLOW}`,
        { 'user_id': id }
        );
    }
  
    public followerByUserId(id: string): Observable<IUserFollowerResponse> {
      return this.http.get<IUserFollowerResponse>(
        `${environment.API_BASE_URL}/${environment.FOLLOWERS_BY_USER_ID.replace(':userId', id)}`
        );
    }

    public followingByUserId(id: string): Observable<IUserFollowingResponse> {
      return this.http.get<IUserFollowingResponse>(
        `${environment.API_BASE_URL}/${environment.FOLLOWING_BY_USER_ID.replace(':userId', id)}`
        );
    }
}