import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Message } from 'primeng/primeng';

@Injectable()
export class PopupService {
  private _msgs: Message[] = [];
  private subject = new Subject<any>();

  constructor() {}

  public addToast(type: string = 'success', title: string = 'Done', content: string = '') {
    // this.clear();
    this.subject.next({ severity: type, summary: title, detail: content });
  }

  public clear() {
    this.subject.next();
  }

  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
