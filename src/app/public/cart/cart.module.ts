import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    CartRoutingModule
  ],
  declarations: [CartComponent],
  providers: []
})
export class CartModule { }
