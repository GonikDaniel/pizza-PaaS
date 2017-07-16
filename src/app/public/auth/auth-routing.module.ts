import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInGuard } from './../../core/_guards/signin.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthComponent } from './auth.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [SignInGuard],
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
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
