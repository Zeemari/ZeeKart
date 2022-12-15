import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhyZeekartRoutingModule } from './why-zeekart-routing.module';
import { WhyZeekartComponent } from './why-zeekart.component';


@NgModule({
  declarations: [
    WhyZeekartComponent
  ],
  imports: [
    CommonModule,
    WhyZeekartRoutingModule
  ]
})
export class WhyZeekartModule { }
