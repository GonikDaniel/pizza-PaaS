import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';

export const routes: Routes = [
  {
    path: 'app',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: '/app/catalogue', pathMatch: 'full' },
      { path: 'auth', loadChildren: 'app/public/auth/auth.module#AuthModule' },
      { path: 'catalogue', loadChildren: 'app/public/catalogue/catalogue.module#CatalogueModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
