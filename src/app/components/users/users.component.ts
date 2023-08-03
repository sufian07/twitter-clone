import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/dto/user.dto';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Input() users: Array<IUser> = [];
}
