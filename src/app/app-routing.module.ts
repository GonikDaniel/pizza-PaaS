import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './static/not-found/not-found.component';
import { AuthGuard } from './core/_guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch : 'full' },
  { path: 'app', loadChildren: 'app/public/public.module#PublicModule' },
  { path: 'admin', canLoad: [AuthGuard], loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
