import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../shared/api/auth/auth.service';
import { AuthGuard } from '../shared/guard/auth.guard';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, HttpClientModule],
  providers: [AuthService, AuthGuard],
})
export class AuthModule {}
