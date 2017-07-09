import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    // children: [
    //   { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent,
    //     data: {
    //       title: 'Dashboard'
    //     },
    //   },
    //   {
    //     path: 'orders',
    //     component: OrdersComponent,
    //     data: {
    //       title: 'Orders'
    //     },
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
