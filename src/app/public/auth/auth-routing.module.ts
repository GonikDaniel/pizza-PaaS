import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';

export const routes: Routes = [
  {
    path: 'app/auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: '/app/auth/login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login'
        },
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}