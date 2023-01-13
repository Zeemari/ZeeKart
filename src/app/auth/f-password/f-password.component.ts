import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/api/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/shared/util/util.service';
import { Router } from '@angular/router';
import { ApplicationConfig } from '@angular/platform-browser';

@Component({
  selector: 'app-f-password',
  templateUrl: './f-password.component.html',
  styleUrls: ['./f-password.component.scss'],
})
export class FPasswordComponent implements OnInit {
  thisForm: FormGroup | any;
  email: string = '';
  successMsg = null;

  constructor(
    public _authService: AuthService,
    private fb: FormBuilder,
    private _util: UtilService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.thisForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  forgotPassword() {
    type PostBody = {
      email: string;
    };

    const postbody: PostBody = {
      email: this.thisForm.value.email,
    };

    this._authService.fpasswordUser(postbody).subscribe(
      (res: any) => {
        const userObject = JSON.stringify(postbody);
        this._util.saveToLocalStorage('user', userObject);

        this.thisForm.reset();

        alert('password reset link sent successfully');

        this._router.navigate(['login']);
      },
      (err: any) => {
        this._router.navigate(['']);
        alert('failed');
      }
    );
  }
}
