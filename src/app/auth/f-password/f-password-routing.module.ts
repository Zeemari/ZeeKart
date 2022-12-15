import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FPasswordComponent } from './f-password.component';

const routes: Routes = [{ path: '', component: FPasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FPasswordRoutingModule { }
