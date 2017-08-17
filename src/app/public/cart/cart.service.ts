import { Observable } from 'rxjs/Observable';
import { UserService } from './../../core/user/user.service';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import * as _ from 'lodash';

@Injectable()
export class CartService {

  constructor(
    private db: AngularFireDatabase,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  getCart() {
    const cartId = _.get(this.userService.user, 'cartId', this.cookieService.get('tmpCartId'));
    return cartId
      ? this.db.object(`carts/${cartId}`)
      : Observable.of({ items: [] });
  }

}
