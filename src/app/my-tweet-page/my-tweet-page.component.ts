import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { ITweet } from '../dto/tweet.dto';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-my-tweet-page',
  templateUrl: './my-tweet-page.component.html',
  styleUrls: ['./my-tweet-page.component.scss']
})
export class MyTweetPageComponent implements OnInit {
  public loading = false;
  public tweets: Array<ITweet> = [];
  constructor(
    private tweetService: TweetService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getMyTweets();
  }

  public getMyTweets() {
    this.loading = true;
    this.tweetService.myTweets().pipe(first())
    .subscribe({
        next: (result) => {
          this.tweets = result.my_tweets;
          this.loading = false;
        },
        error: error => {
          this.toastr.error(error?.error?.error ?? error.message);
          this.loading = false;
        }
    });
  }
}
