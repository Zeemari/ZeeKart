import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../shared/api/auth/auth.service';
import { AuthGuard } from '../shared/guard/auth.guard';
import { DashboardService } from '../shared/api/dashboard/dashboard.service';
import { InterceptorService } from '../shared/interceptors/interceptor.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from '../shared/interceptors/loading.interceptor';

@NgModule({
  declarations: [DashboardComponent, SpinnerComponent],
  imports: [CommonModule, DashboardRoutingModule, HttpClientModule],
  providers: [
    AuthService,
    DashboardService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class DashboardModule {}
