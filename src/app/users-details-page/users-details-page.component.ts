import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { ITweet } from '../dto/tweet.dto';
import { IUser } from '../dto/user.dto';
import { TweetService } from '../services/tweet.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-details-page',
  templateUrl: './users-details-page.component.html',
  styleUrls: ['./users-details-page.component.scss']
})
export class UsersDetailsPageComponent implements OnInit{
  public id: string ='';
  public loading = false;
  public user: IUser = {} as IUser;
  public tweets: Array<ITweet> = [];
  public followers: Array<IUser> = [];
  public followings: Array<IUser> = [];
  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private tweetService: TweetService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    const selectedUser$ = this.userService.getSelectedUser();
    selectedUser$.subscribe((user)=> this.user=user);
    this.getData();
  }
  getData(){
    this.getUserTweets();
    this.getUserFollower();
    this.getUserFollowings();
  }
  public getUserTweets() {
    this.loading = true;
    this.tweetService.tweetByUserId(this.id).pipe(first())
    .subscribe({
        next: (result) => {
          this.tweets = result.tweets;
          this.user = this.tweets[0]?.user
          this.loading = false;
        },
        error: error => {
          this.toastr.error(error?.error?.error ?? error.message);
          this.loading = false;
        }
    });
  }
  public getUserFollower() {
    this.loading = true;
    this.userService.followerByUserId(this.id).pipe(first())
    .subscribe({
        next: (result) => {
          this.followers = result.followers;
          this.loading = false;
        },
        error: error => {
          this.toastr.error(error?.error?.error ?? error.message);
          this.loading = false;
        }
    });
  }
  public getUserFollowings() {
    this.loading = true;
    this.userService.followingByUserId(this.id).pipe(first())
    .subscribe({
        next: (result) => {
          this.followings = result.followings;
          this.loading = false;
        },
        error: error => {
          this.toastr.error(error?.error?.error ?? error.message);
          this.loading = false;
        }
    });
  }
}
