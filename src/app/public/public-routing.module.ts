import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: 'app',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: '/app/catalogue', pathMatch: 'full' },
      { path: 'auth', loadChildren: 'app/public/auth/auth.module#AuthModule' },
      { path: 'catalogue', loadChildren: 'app/public/catalogue/catalogue.module#CatalogueModule' },
      { path: 'cart', component: CartComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
