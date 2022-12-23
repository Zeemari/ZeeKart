import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/api/auth/auth.service';
import { UtilService } from '../shared/util/util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  status: boolean = false;
  user: any;

  constructor(public _authService: AuthService, private _util: UtilService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const userInformation = this._util.readFromLocalStorage('user');
    userInformation ? (this.user = JSON.parse(userInformation)) : '';
  }

  clickEvent() {
    this.status = !this.status;
  }
}
