import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  status: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  clickEvent() {
    this.status = !this.status;
  }
}
