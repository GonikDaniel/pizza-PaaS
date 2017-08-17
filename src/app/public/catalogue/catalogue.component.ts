import { Component, OnInit, ViewChild } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { CartService } from '../../core/cart/cart.service';
import * as _ from 'lodash';

@Component({
  selector: 'paas-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  @ViewChild('addToCartModal') addProductModal;
  public products;
  public availableSizes = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];
  public selectedProduct = { sizes: [], selectedSize: [] };
  // public items = [
  //   { label: 'Small', icon: 'fa-cart-plus', command: () => this.addToCart('small') },
  //   { label: 'Medium', icon: 'fa-cart-plus', command: () => this.addToCart('medium') },
  //   { label: 'Large', icon: 'fa-cart-plus', command: () => this.addToCart('large') }
  // ];

  constructor(
    private db: AngularFireDatabase,
    private cartService: CartService
  ) {
    this.products = this.db.list('/products', {
      query: {
        limitToFirst: 20,
        orderByChild: 'createdAt',
        orderByKey: true
      }
    });
  }

  ngOnInit() {
    this.selectedProduct.sizes = this.availableSizes;
  }

  addToCart(product) {
    console.log(product);
    this.selectedProduct = product;
    if (product.sizes.length > 1 && !this.selectedProduct.selectedSize) {
      this.selectedProduct.sizes = this.availableSizes.filter(size => (
        product.sizes.includes(size.value)
      ));
      this.addProductModal.show();
    } else {
      product.selectedSize = _.get(this.selectedProduct, 'selectedSize[0]') || product.sizes[0];
      this.cartService.addToCart(product);
      this.addProductModal.hide();
    }
  }

  getSizes(product) {
    console.log(product.sizes);
    return product.sizes.map(size => ({
      label: size.toUpperCase(),
      value: size
    }));
  }

}
