import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ],
  declarations: [CatalogueComponent]
})
export class CatalogueModule { }
