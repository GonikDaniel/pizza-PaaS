import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Message } from 'primeng/primeng';

import { PopupService } from './core/popups/popup.service';

@Component({
  selector: 'paas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public msgs: Message[];

  constructor(
    private popupService: PopupService
  ) {
    this.subscription = this.popupService.getMessage()
      .subscribe(message => this.msgs = [message]);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
