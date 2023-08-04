import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/dto/user.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ){}
  @Input() users: Array<IUser> = [];
  public selectUser(user: IUser) {
    const selectedUser$ = this.userService.getSelectedUser();
    selectedUser$.next(user);
    this.router.navigate(['/user', user?.id]);
  }
}
