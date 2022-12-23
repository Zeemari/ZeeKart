import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/shared/api/auth/auth.service';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { DashboardService } from 'src/app/shared/api/dashboard/dashboard.service';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
  providers: [DashboardService, AuthService, AuthGuard],
})
export class ProductsModule {}
