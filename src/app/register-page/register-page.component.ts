import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public registerForm!: FormGroup;
  public loading = false;
  public submitted = false;
  constructor(
    private authenticationService: AuthenticationService,    
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;
    this.authenticationService.register({
      username: this.registerForm.get('username')!.value,
      email: this.registerForm.get('email')!.value,
      password: this.registerForm!.get('password')!.value
    }).pipe(first())
    .subscribe({
      error: error => {
        this.toastr.error(error?.error?.error ?? error.message);
        this.loading = false;
      }
    });
  }
}