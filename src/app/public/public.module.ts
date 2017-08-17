import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { CatalogueModule } from './catalogue/catalogue.module';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    LayoutModule,
    AuthModule,
    CatalogueModule,
    PublicRoutingModule
  ],
  declarations: [PublicComponent, AboutComponent, ContactComponent]
})
export class PublicModule { }
