import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { first, Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss'],
})
export class SecretComponent implements OnInit {
  public tweetForm!: FormGroup;
  public loading = false;
  public submitted = false;

  constructor(
    private tweetService: TweetService,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit() {
    this.tweetForm = new FormGroup({
      content: new FormControl('', Validators.required),
    });
  }
  get content() { return this.tweetForm.get('content'); }

  logout(): void {
    this.authenticationService.logout();
  }

  public onSubmit() {
    if (this.tweetForm.invalid) {
        return;
    }
    this.tweetService.createTwitter({
      content: this.tweetForm.get('content')!.value,
    }).pipe(first())
    .subscribe({
        next: (result) => {
          console.log(result);
        },
        error: error => {
          console.log(error);
        }
    });
  }
}