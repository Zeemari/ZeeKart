import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../shared/api/auth/auth.service';
import { AuthGuard } from '../shared/guard/auth.guard';
import { DashboardService } from '../shared/api/dashboard/dashboard.service';
import { InterceptorService } from '../shared/interceptors/interceptor.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, HttpClientModule],
  providers: [
    AuthService,
    DashboardService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
})
export class DashboardModule {}
