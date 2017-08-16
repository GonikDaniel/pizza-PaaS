import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
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
  private value: any = ['pizza'];
  public productTypes: Array<string> = ['pizza', 'salad', 'drink'];
  public productName;
  constructor() {}

  ngOnInit() {}

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  // public openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
}
