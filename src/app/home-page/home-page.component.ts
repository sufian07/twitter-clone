import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TweetService } from '../services/tweet.service';
import { ITweet } from '../dto/tweet.dto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public tweetForm!: FormGroup;
  public loading = false;
  public timeLineLoading = false;
  public submitted = false;
  public tweets: Array<ITweet> = [];
  constructor(
    private tweetService: TweetService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getTimeline();
    this.tweetForm = new FormGroup({
      content: new FormControl('', Validators.required),
    });
  }
  get content() { return this.tweetForm.get('content'); }

  public getTimeline() {
    this.timeLineLoading = true;
    this.tweetService.timeline().pipe(first())
    .subscribe({
        next: (result) => {
          this.tweets = result.timeline;
          this.timeLineLoading = false;
        },
        error: error => {
          this.toastr.error(error?.error?.error ?? error.message);
          this.timeLineLoading = false;
        }
    });
  }

  public onSubmit() {
    this.submitted = true;
    if (this.tweetForm.invalid) {
        return;
    }
    this.loading = true;
    this.tweetService.createTwitter({
      content: this.tweetForm.get('content')!.value,
    }).pipe(first())
    .subscribe({
        next: () => {
          this.toastr.success('Tweet successfull');
          this.loading = false;
          this.submitted = false;
          this.tweetForm.reset()
        },
        error: error => {
          this.toastr.error(error?.error?.error ?? error.message);
          this.loading = false;
          this.submitted = false;
        }
    });
  }
}