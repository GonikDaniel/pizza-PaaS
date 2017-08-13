// Proves that UserService is an app-wide singleton and only instantiated once
// IFF shared.module follows the `forRoot` pattern

// If it didn't, a new instance of UserService would be created
// after each lazy load and the userName would double up.

import { Injectable, Optional } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import * as _ from 'lodash';

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
    this._settings = _.get(config, 'settings', {});
    this.user = localStorage.getItem('user');
    // this.authService.authState.subscribe(user => {
    //   if (user) {
    //     console.log('UserService got user: ', user);
    //     this._user = user;
    //   }
    // });
  }

  get config() {
    // Demo: add a suffix if this service has been created more than once
    if (this.id > 1) {
      console.log(`user class initialized more than one time (${this.id})`);
    }
    return this._settings;
  }

  get publicFields() {
    return ['displayName', 'email', 'photoURL'];
  }

  set user(userData: Object) {
    this._user = userData;
  }

  get user() {
    return JSON.parse(this._user);
  }

  updateUserSession(user) {
    localStorage.setItem('user', JSON.stringify(_.pick(user, this.publicFields)));
    this.user = localStorage.getItem('user');
  }
}
