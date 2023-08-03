import { environment } from '../../configs/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { ILogIn, IRegistration, IToken } from '../dto/authentication.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
    private tokenKey = 'token';
    constructor(private http: HttpClient, private router: Router) {}

    public healthCheck(): void {
        this.http.get(
        `${environment.API_BASE_URL}`,
        ).subscribe((result) => {
            console.log(result);
        });
    }

    public login(dto:ILogIn): Observable<IToken> {
      const obs = this.http.post<IToken>(
        `${environment.API_BASE_URL}/${environment.LOGIN}`,
        dto,
        );
        obs.pipe(first()).subscribe((result) => {
            localStorage.setItem(this.tokenKey, result.token);
            this.router.navigate(['/']);
        });
        return obs;
    }

    public register(dto: IRegistration): void {
        this.http.post<IToken>(
            `${environment.API_BASE_URL}/${environment.SIGN_UP}`,
            dto,
        ).subscribe((result) => {
          localStorage.setItem(this.tokenKey, result.token);
          this.router.navigate(['/']);
        });
    }

    public logout() {
        localStorage.removeItem(this.tokenKey);
        this.router.navigate(['/login']);
      }
    
      public isLoggedIn(): boolean {
        let token = localStorage.getItem(this.tokenKey);
        return token != null && token.length > 0;
      }
    
      public getToken(): string | null {
        return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
      }
}