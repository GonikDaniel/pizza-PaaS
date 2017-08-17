import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment.dev';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { UserService } from './user/user.service';
import { UserServiceConfig } from './user/user.service';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { SignInGuard } from './_guards/signin.guard';

import { CartService } from './cart/cart.service';
import { LoggerService } from './logger/logger.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { FormService } from './forms/form.service';
import { PopupService } from './popups/popup.service';

@NgModule({
  imports: [
    CommonModule,
    // you can pass 'my-app-name' as a second param
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  declarations: [SpinnerComponent],
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    CookieService,

    CartService,
    AuthService,
    AuthGuard,
    SignInGuard,
    UserService,
    LoggerService,
    SpinnerService,
    FormService,
    PopupService
  ]
})
export class CoreModule {

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
