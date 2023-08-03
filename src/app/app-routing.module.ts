import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyTweetPageComponent } from './my-tweet-page/my-tweet-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { UsersDetailsPageComponent } from './users-details-page/users-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-tweets',
    component: MyTweetPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UsersPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/:id',
    component: UsersDetailsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
