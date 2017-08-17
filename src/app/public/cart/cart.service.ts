import { Observable } from 'rxjs/Observable';
import { UserService } from './../../core/user/user.service';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import * as firebase from 'firebase/app';
import * as _ from 'lodash';

@Injectable()
export class CartService {
  private cartsRef;

  constructor(
    private db: AngularFireDatabase,
    private userService: UserService,
    private cookieService: CookieService
  ) {
    this.cartsRef = this.db.list('/carts');
  }

  getCart() {
    let cartId = _.get(this.userService.user, 'cartId', this.cookieService.get('tmpCartId'));
    if (!cartId) {
      const createdAt = firebase.database.ServerValue.TIMESTAMP;
      const newCartRef = this.cartsRef.push({ createdAt, items: [] });
      cartId = newCartRef.key;
      this.cookieService.put('tmpCartId', cartId);
    }
    return this.db.object(`carts/${cartId}`);
  }

}
