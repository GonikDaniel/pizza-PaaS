import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; // app and typings

@Component({
  selector: 'paas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: FirebaseListObservable<any[]>;
  public user: any;
  public msgVal = '';

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.items = this.db.list('/messages', {
      query: {
        limitToLast: 5
      }
    });

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage, name: this.user.displayName });
    this.msgVal = '';
  }

}
