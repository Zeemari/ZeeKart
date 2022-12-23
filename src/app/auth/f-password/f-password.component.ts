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
    this._authService.fpasswordUser(this.thisForm.value).subscribe(
      (result) => {
        this.successMsg = result;
        const { token } = result.data;
        const userObject = JSON.stringify(this.thisForm);
        this._util.saveToLocalStorage('token', token);
        this._util.saveToLocalStorage('user', userObject);
        alert('Successful!!!!');
        this.thisForm.reset();
        this._router.navigate(['/login']);
      },
      (error) => {
        alert('Kpele!!!');
      }
    );
  }
}
