import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module'
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    PublicRoutingModule
  ],
  declarations: []
})
export class PublicModule { }
