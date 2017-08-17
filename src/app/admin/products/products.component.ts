import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
// import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { Message } from 'primeng/primeng';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'paas-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  // public modalRef: BsModalRef;
  @ViewChild('addProductModal') addProductModal;
  public msgs: Message[] = [];
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
    private formBuilder: FormBuilder
  ) {
    this.products = this.db.list('/products', {
      query: {
        limitToLast: 20
      }
    });
  }

  ngOnInit() {
    this.initNewProduct();

    // this.product.valueChanges.subscribe(console.log);
    // this.product.statusChanges.subscribe(() => console.log(this.product.errors))
  }

  public clear() {
    this.msgs = [];
  }

  public createProduct() {
    this.markFormGroupTouched(this.product);
    if (!this.product.valid) {
      return;
    }
    const createdAt = firebase.database.ServerValue.TIMESTAMP;
    this.products.push({ createdAt, ...this.product.value });

    this.addProductModal.hide();
    this.showToast('success', 'Done', 'Product has been created!')
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

  public handleDropdownClick() {
    this.filteredImages = [];

    // mimic remote call
    setTimeout(() => {
      this.filteredImages = this.productImages;
    }, 100)
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public showToast(type = 'success', title = 'Done', content = '') {
    this.clear();
    this.msgs.push({ severity: 'success', summary: title, detail: content });
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value: any): void {
    // this.type = value;
  }

  private initNewProduct() {
    this.product = this.formBuilder.group({
      type: ['pizza', [Validators.required]],
      name: ['', [Validators.required]],
      description: [''],
      image: [''],
      isVegetarian: [false],
      hasOptions: [false],
      sizes: [['medium'], [Validators.required]]
    });
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }

  // public openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
}
