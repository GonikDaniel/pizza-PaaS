import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { FormService } from './../../core/forms/form.service';
import { PopupService } from './../../core/popups/popup.service';

@Component({
  selector: 'paas-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  // public modalRef: BsModalRef;
  @ViewChild('addProductModal') addProductModal: ModalDirective;
  @ViewChild(DatatableComponent) productsTable: DatatableComponent;
  public products;
  public product;
  public productTypes: Array<Object> = [
    { label: 'Pizza', value: 'pizza' },
    { label: 'Salad', value: 'salad' },
    { label: 'Drink', value: 'drink' }
  ];
  public productImages: Array<string> = [
    'amadeus.jpg',
    'asianchicken.jpg',
    'chickencoolness.jpg',
    'gardengallop.jpg',
    'grecoirish.jpg',
    'holysmokes.jpg',
    'hulapie.jpg',
    'italianstallion.jpg',
    'jerusalem.jpg',
    'lisbon.jpg',
    'littlevenus.jpg',
    'makeyourown.jpg',
    'mamamia.jpg',
    'nocheese.jpg',
    'pestolante.jpg',
    'plaincheese.jpg',
    'porkbbq.jpg',
    'shanghai.jpg',
    'southoftheborder.jpg',
    'tajmahal.jpg',
    'tomterrific.jpg'
  ];
  public filteredImages: any[];
  public sizesOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];
  public productName;
  public productDescription;
  // private type: any = ['pizza'];

  constructor(
    private db: AngularFireDatabase,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private popupService: PopupService
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
    this.initNewProduct();

    // this.product.valueChanges.subscribe(console.log);
    // this.product.statusChanges.subscribe(() => console.log(this.product.errors))
  }

  public createProduct() {
    this.formService.markFormGroupTouched(this.product);
    if (!this.product.valid) {
      return;
    }
    const createdAt = firebase.database.ServerValue.TIMESTAMP;
    this.products.push({ createdAt, ...this.product.value });

    this.addProductModal.hide();
    this.popupService.addToast('success', 'Done', 'Product has been created!');
    this.initNewProduct();
  }

  public filterImages(event) {
    this.filteredImages = [];
    for (let i = 0; i < this.productImages.length; i++) {
      const image = this.productImages[i];
      if (image.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredImages.push(image);
      }
    }
  }

  public handleDropdownClick(event) {
    this.filteredImages = [];

    // mimic remote call
    setTimeout(() => {
      this.filteredImages = this.productImages;
    }, 100)
  }

  private initNewProduct() {
    this.product = this.formBuilder.group({
      type: ['pizza', [Validators.required]],
      name: ['', [Validators.required]],
      description: [''],
      image: [''],
      isVegetarian: false,
      hasOptions: false,
      sizes: [['medium'], [Validators.required]]
    });
  }

  // public openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
}
