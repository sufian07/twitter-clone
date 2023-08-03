import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;
  public loading = false;
  public submitted = false;

  constructor(
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  get email() { return this.loginForm.get('email'); }

  public onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    this.authenticationService.login({
      email: this.loginForm.get('email')!.value,
      password: this.loginForm!.get('password')!.value
    }).pipe(first())
    .subscribe({
      error: error => {
        this.toastr.error(error?.error?.error ?? error.message);
          this.loading = false;
      }
    });
  }
}