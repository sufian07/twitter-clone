import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  constructor(
    private authenticationService: AuthenticationService,
  ) {}
  logout(): void {
    this.authenticationService.logout();
  }
}
