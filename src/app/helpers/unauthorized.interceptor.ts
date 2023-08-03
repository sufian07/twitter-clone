import { AuthenticationService } from '../services/authentication.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(public authenticationService: AuthenticationService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((result: any)=>{
      const error = result?.['body']?.['error']
      if(error === "Invalid or Expired JWT"){
        this.authenticationService.logout();
      }
    },(error: any)=>{
      console.log(error);
      return;
    }));
  }
}