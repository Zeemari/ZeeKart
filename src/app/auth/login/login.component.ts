import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(11)]],
    });
  }

  login() {
    this.http
      .get<any>('http://localhost:3000/signup', this.loginForm.value)
      .subscribe(
        (res) => {
          const user = res['find']((a: any) => {
            return (
              a.email === this.loginForm.value.email &&
              a.password === this.loginForm.value.password
            );
          });
          if (user) {
            alert('user successfully logged in!!!');
            this.loginForm.reset();
            this._router.navigate(['/dashboard']);
          } else {
            alert('user not found!!!');
          }
        },
        (err) => {
          alert('something went wrong!!!');
        }
      );
  }
}
