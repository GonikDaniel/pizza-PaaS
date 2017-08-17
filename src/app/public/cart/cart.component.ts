import { CartService } from './cart.service';
import { UserService } from '../../core/user/user.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { DatatableComponent } from '@swimlane/ngx-datatable'

import * as _ from 'lodash';

@Component({
  selector: 'paas-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild(DatatableComponent) cartTable: DatatableComponent;
  public cart;

  constructor(
    private cartService: CartService
  ) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit() {
  }

}
