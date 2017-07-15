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
        console.log('Authservice user: ', user);
        this.user = user;
      }
    });
  }

  /**
   * Logs the user in using one of providers (google, facebook, twitter)
   * @param provider
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  public loginWithProvider(provider) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  /**
   * Calls the AngularFire2 service to register a new user
   * @param email
   * @param password
   * @returns {firebase.Promise<void>}
   */
  public registerUser({ email, password }) {
    console.log(email)
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * Saves information to display to screen when user is logged in
   * @param uid
   * @param name
   * @param email
   * @returns {firebase.Promise<void>}
   */
  public saveUserInfoFromForm(uid, name, email) {
    // return this.afAuth.database.object(`registeredUsers/${uid}`).set({
    //   name: name,
    //   email: email,
    // });
  }

   /**
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  public loginWithEmail({ email, password }) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
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
