import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FPasswordRoutingModule } from './f-password-routing.module';
import { FPasswordComponent } from './f-password.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FPasswordComponent],
  imports: [CommonModule, FPasswordRoutingModule, SharedModule],
})
export class FPasswordModule {}
