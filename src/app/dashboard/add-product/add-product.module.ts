import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductComponent } from './add-product.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AddProductComponent],
  imports: [CommonModule, AddProductRoutingModule, SharedModule],
})
export class AddProductModule {}
