import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'https://ecom.hoolioapps.com/api/register';
  private _loginUrl = 'https://ecom.hoolioapps.com/api/login';
  private _forgotPasswordUrl = 'https://ecom.hoolioapps.com/api/forgotpassword';

  constructor(private http: HttpClient, private _router: Router) {}

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  fpasswordUser(user) {
    return this.http.post<any>(this._forgotPasswordUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
