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
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  public loginWithEmail({ email, password }) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Logs the user in using one of providers (google, facebook, twitter)
   * @param provider
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  public loginWithProvider(provider: string) {
    let firebaseProvider;
    switch (provider) {
      case 'facebook':
        firebaseProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case 'google':
        firebaseProvider = new firebase.auth.GoogleAuthProvider();
        break;
      case 'twitter':
        firebaseProvider = new firebase.auth.TwitterAuthProvider();
        break;
      default:
        throw new Error(`Wrong login provider: ${provider}`);
    }
    return this.afAuth.auth.signInWithPopup(firebaseProvider);
  }

  public logout() {
    this.afAuth.auth.signOut();
  }

  /**
   * Calls the AngularFire2 service to register a new user
   * @param email
   * @param password
   * @returns {firebase.Promise<void>}
   */
  public registerUser({ email, password }) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

}
