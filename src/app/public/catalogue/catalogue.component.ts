import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'paas-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  public products;

  constructor(
    private db: AngularFireDatabase
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
  }

}
