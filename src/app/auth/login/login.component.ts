import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/api/auth/auth.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/shared/util/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  email: string = '';
  password: string;

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router,
    private _util: UtilService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(11)]],
    });
  }

  login() {
    type PostUser = {
      email: string;
      password: string;
    };

    const postUser: PostUser = {
      password: this.loginForm.value.password,
      email: this.loginForm.value.email,
    };

    this._auth.loginUser(postUser).subscribe(
      (res: any) => {
        const { token } = res.data;
        const userObject = JSON.stringify(postUser);
        this._util.saveToLocalStorage('token', token);
        this._util.saveToLocalStorage('user', userObject);

        alert('User Logged Successfully');
        this.loginForm.reset();
        this._router.navigate(['/dashboard']);
      },
      (err: any) => {
        alert('Sorry! provide valid details');
      }
    );
  }
}
