import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/api/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        conpassword: ['', [Validators.required]],
      },
      { validators: this.Mustmatch('password', 'conpassword') }
    );
  }

  get f() {
    return this.signupForm.controls;
  }

  Mustmatch(password: any, conpassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const conpasswordcontrol = formGroup.controls[conpassword];

      if (
        conpasswordcontrol.errors &&
        !conpasswordcontrol.errors['Mustmatch']
      ) {
        return;
      }

      if (passwordcontrol.value !== conpasswordcontrol.value) {
        conpasswordcontrol.setErrors({ Mustmatch: true });
      } else {
        conpasswordcontrol.setErrors(null);
      }
    };
  }

  onSubmit() {
    type PostUser = {
      name: string;
      email: string;
      password: string;
      password_confirmation: string;
    };

    const postUser: PostUser = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      password_confirmation: this.signupForm.value.password,
    };

    this._auth.registerUser(postUser).subscribe(
      (res) => {
        const userObject = JSON.stringify(postUser);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', userObject);
        alert('User Registered Successfully');
        this.signupForm.reset();
        this._router.navigate(['/login']);
      },
      (err) => {
        alert('please confirm your signup details');
      }
    );
  }
}
