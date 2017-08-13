// Proves that UserService is an app-wide singleton and only instantiated once
// IFF shared.module follows the `forRoot` pattern

// If it didn't, a new instance of UserService would be created
// after each lazy load and the userName would double up.

import { Injectable, Optional } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';

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
    private authService: AuthService,
    public afDB: AngularFireDatabase
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
    return ['name', 'displayName', 'email', 'photoURL', 'avatar'];
  }

  set user(userData: Object) {
    this._user = userData;
  }

  get user() {
    return JSON.parse(this._user);
  }

  updateUserSession(user) {
    this.afDB.object(`users/${user.uid}`).$ref.once('value')
      .then(snapshot => {
        const dbUser = snapshot.val();
        console.log(dbUser);
        localStorage.setItem('user', JSON.stringify(_.pick(dbUser, this.publicFields)));
        this.user = localStorage.getItem('user');
      })
  }
}
