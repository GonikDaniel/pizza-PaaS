import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'paas-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  public msg;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.msg = this.formBuilder.group({
      name: ['', [Validators.required]],
      text: ['', [Validators.required]]
    });
  }

  openExternalLink(link) {
    window.open(link, '_blank');
  }

}
