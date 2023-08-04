import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { IUser } from '../dto/user.dto';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-followers-page',
  templateUrl: './followers-page.component.html',
  styleUrls: ['./followers-page.component.scss']
})
export class FollowersPageComponent {
  public loading = false;
  public users: Array<IUser> = [];
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getFollowers();
  }

  public getFollowers() {
    this.loading = true;
    this.userService.followers().pipe(first())
    .subscribe({
        next: (result) => {
          this.users = result.followers;
          this.loading = false;
        },
        error: error => {
          this.toastr.error(error?.error?.error ?? error.message);
          this.loading = false;
        }
    });
  }
}
