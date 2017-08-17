import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

import { CartService } from './cart.service';

@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    CartRoutingModule
  ],
  declarations: [CartComponent],
  providers: [CartService]
})
export class CartModule { }
