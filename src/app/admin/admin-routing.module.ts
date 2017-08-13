import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/_guards/auth.guard';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { BillingComponent } from './billing/billing.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'orders',
        component: OrdersComponent,
        data: {
          title: 'Orders'
        }
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'Products'
        }
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        data: {
          title: 'Categories'
        }
      },
      {
        path: 'tags',
        component: TagsComponent,
        data: {
          title: 'Tags'
        }
      },
      {
        path: 'billing',
        component: BillingComponent,
        data: {
          title: 'Billing'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
