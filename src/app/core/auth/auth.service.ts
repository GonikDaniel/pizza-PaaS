import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; // app and typings

@Injectable()
export class AuthService {

  private user: any;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  public login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  public loginWithCredentials(userModel) {
    console.log(userModel, typeof userModel, userModel.prototype);
    return Observable.create(observer => {
      observer.next(false);
      // let result;
      // if (authenticatedUser && authenticatedUser.password === password){
      //   localStorage.setItem('user', authenticatedUser.username);
      //   observer.next(true);
      // }
      // observer.error('Wrong username or password!');

    });
  }

  public logout() {
    this.afAuth.auth.signOut();
  }

}
