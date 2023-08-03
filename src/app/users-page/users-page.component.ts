import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { IUser } from '../dto/user.dto';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  public loading = false;
  public users: Array<IUser> = [];
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getMyTweets();
  }

  public getMyTweets() {
    this.loading = true;
    this.userService.users().pipe(first())
    .subscribe({
        next: (result) => {
          this.users = result.users;
          this.loading = false;
        },
        error: error => {
          this.toastr.error(error?.error?.error ?? error.message);
          this.loading = false;
        }
    });
  }

}
