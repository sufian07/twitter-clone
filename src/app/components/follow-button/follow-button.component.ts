import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent {
  @Input() id: number = 0;
  public loading = false;
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  follow(){
    if (!this.id || this.id < 1) {
        return;
    }
    this.loading = true;
    this.userService.follow(String(this.id)).pipe(first())
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
