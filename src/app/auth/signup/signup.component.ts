import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
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
    this.http
      .post<any>('http://localhost:3000/signup', this.signupForm.value)
      .subscribe(
        (res) => {
          alert('Signup successful');
          this.signupForm.reset();
          this._router.navigate(['/login']);
        },
        (err) => {
          alert('please confirm your signup details');
        }
      );
  }
}
