import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FPasswordRoutingModule } from './f-password-routing.module';
import { FPasswordComponent } from './f-password.component';


@NgModule({
  declarations: [
    FPasswordComponent
  ],
  imports: [
    CommonModule,
    FPasswordRoutingModule
  ]
})
export class FPasswordModule { }
