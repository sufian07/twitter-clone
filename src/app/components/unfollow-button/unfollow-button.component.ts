import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-unfollow-button',
  templateUrl: './unfollow-button.component.html',
  styleUrls: ['./unfollow-button.component.scss']
})
export class UnfollowButtonComponent {
  @Input() id: number = 0;
  public loading = false;
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  unfollow(){
    if (!this.id || this.id < 1) {
        return;
    }
    this.loading = true;
    this.userService.unfollow(String(this.id)).pipe(first())
    .subscribe({
        next: (result) => {
          this.toastr.success(result.resp);
          this.loading = false;
        },
        error: error => {
          this.toastr.error(error?.error?.error ?? error.message);
          this.loading = false;
        }
    });
  }
}
