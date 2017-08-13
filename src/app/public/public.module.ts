import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { CatalogueModule } from './catalogue/catalogue.module';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    AuthModule,
    CatalogueModule,
    PublicRoutingModule
  ],
  declarations: [PublicComponent]
})
export class PublicModule { }
