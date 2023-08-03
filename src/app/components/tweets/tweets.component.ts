import { Component, Input } from '@angular/core';
import { ITweet } from 'src/app/dto/tweet.dto';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent {
  @Input() tweets: Array<ITweet> = [];
}
