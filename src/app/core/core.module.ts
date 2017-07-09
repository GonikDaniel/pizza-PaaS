import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { UserService } from './user/user.service';
import { UserServiceConfig } from './user/user.service';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { LoggerService } from './logger/logger.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    LoggerService,
    SpinnerService
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
