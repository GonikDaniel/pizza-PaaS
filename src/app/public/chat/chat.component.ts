import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'paas-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public items: FirebaseListObservable<any[]>;
  public user: any;
  public msgVal = '';

  constructor(
    private db: AngularFireDatabase
  ) {
    this.items = this.db.list('/messages', {
      query: {
        limitToLast: 5
      }
    });
  }

  ngOnInit() {}

  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage, name: this.user.displayName });
    this.msgVal = '';
  }

}
