import { PopupService } from './../../core/popups/popup.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormService } from './../../core/forms/form.service';

@Component({
  selector: 'paas-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  public msg;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private popupService: PopupService
  ) { }

  ngOnInit() {
    this.initNewForm();
  }

  openExternalLink(link) {
    window.open(link, '_blank');
  }

  sendMsg() {
    this.formService.markFormGroupTouched(this.msg);
    if (!this.msg.valid) {
      return;
    }
    this.initNewForm();
    this.popupService.addToast('success', 'Done', 'Your message has been send!');
  }

  private initNewForm() {
    this.msg = this.formBuilder.group({
      name: ['', [Validators.required]],
      text: ['', [Validators.required]]
    });
  }

}
