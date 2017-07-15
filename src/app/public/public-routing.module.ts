import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/app/catalogue', pathMatch : 'full' },
  { path: 'app/auth', loadChildren: 'app/public/auth/auth.module#AuthModule' },
  { path: 'app/catalogue', loadChildren: 'app/public/catalogue/catalogue.module#CatalogueModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
