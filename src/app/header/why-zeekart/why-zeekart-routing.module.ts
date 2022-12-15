import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhyZeekartComponent } from './why-zeekart.component';

const routes: Routes = [{ path: '', component: WhyZeekartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyZeekartRoutingModule { }
