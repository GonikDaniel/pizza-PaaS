// Proves that UserService is an app-wide singleton and only instantiated once
// IFF shared.module follows the `forRoot` pattern

// If it didn't, a new instance of UserService would be created
// after each lazy load and the userName would double up.

import { Injectable, Optional } from '@angular/core';
import { AuthService } from './../auth/auth.service';

let nextId = 1;

export class UserServiceConfig {
  settings = {};
}

@Injectable()
export class UserService {
  id = nextId++;
  private _settings;
  private _user;

  constructor(
    @Optional() config: UserServiceConfig,
    private authService: AuthService
  ) {
    if (config) {
      this._settings = config.settings;
    }
    this.authService.authState.subscribe(user => {
      if (user) {
        console.log('UserService got user: ', user);
        this._user = user;
      }
    });
  }

  get config() {
    // Demo: add a suffix if this service has been created more than once
    if (this.id > 1) {
      console.log(`user class initialized more than one time (${this.id})`);
    }
    return this._settings;
  }
}
