import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
// import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'paas-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  // public modalRef: BsModalRef;
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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.product = this.formBuilder.group({
      type: ['pizza', [Validators.required]],
      name: ['', [Validators.required]],
      description: [''],
      image: [''],
      isVegetarian: [false],
      hasOptions: [false],
      sizes: [[]]
    });

    // this.product.valueChanges.subscribe(console.log);
    // this.product.statusChanges.subscribe(() => console.log(this.product.errors))
  }

  public createProduct() {
    console.log(this.product.value)
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

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value: any): void {
    // this.type = value;
  }

  // public openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
}
