import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITweet } from '../dto/tweet.dto';
import { IUser } from '../dto/user.dto';

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
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }
}
