import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ LoginComponent, RegisterComponent ],
  providers: [ AuthService, AuthGuard ]
})
export class AuthModule { }
