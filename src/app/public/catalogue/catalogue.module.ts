import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { SharedModule } from './../../shared/shared.module';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ModalModule,

    SharedModule,
    CatalogueRoutingModule
  ],
  declarations: [CatalogueComponent]
})
export class CatalogueModule { }
