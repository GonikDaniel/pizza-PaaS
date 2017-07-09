import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './static/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/catalogue', pathMatch : 'full' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'catalogue', loadChildren: 'app/catalogue/catalogue.module#CatalogueModule' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path:'404', component: NotFoundComponent },
  { path:'**', redirectTo: '/404', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
