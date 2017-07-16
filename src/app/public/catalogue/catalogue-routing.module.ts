import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogueComponent } from './catalogue.component';

export const routes: Routes = [
  {
    path: '',
    component: CatalogueComponent,
    data: {
      title: 'Catalogue'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
