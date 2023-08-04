import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { IUser } from '../dto/user.dto';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-followings-page',
  templateUrl: './followings-page.component.html',
  styleUrls: ['./followings-page.component.scss']
})
export class FollowingsPageComponent {
  public loading = false;
  public users: Array<IUser> = [];
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getMyFollowings();
  }

  public getMyFollowings() {
    this.loading = true;
    this.userService.followings().pipe(first())
    .subscribe({
        next: (result) => {
          this.users = result.followings;
          this.loading = false;
        },
        error: error => {
          this.toastr.error(error?.error?.error ?? error.message);
          this.loading = false;
        }
    });
  }
}
