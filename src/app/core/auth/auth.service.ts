import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app'; // app and typings
import * as _ from 'lodash';

@Injectable()
export class AuthService {

  private user: Object | null = null;

  constructor(
    private afAuth: AngularFireAuth,
    public afDB: AngularFireDatabase
  ) {}

  /**
   * Returns subscription to user state
   * @returns {Observable<firebase.User>}
   */
  get authState(): Observable<firebase.User> {
    return this.afAuth.authState;
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
  public loginWithProvider(provider: string): firebase.Promise<any> {
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

  /**
   * Logs out the user
   * @returns {firebase.Promise<any>}
   */
  public logout(): firebase.Promise<any> {
    _.forIn(window.localStorage, (value: string, objKey: string) => {
      if (true === _.startsWith(objKey, 'firebase:')) {
        window.localStorage.removeItem(objKey);
      }
    });
    return this.afAuth.auth.signOut();
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

  /**
   * Saves information to display to screen when user is logged in
   * @param uid
   * @param name
   * @param email
   * @param avatar
   * @returns {firebase.Promise<void>}
   */
  saveUserInfo(uid: string, name: string, email: string, avatar: string, country: string) {
    const createdAt = firebase.database.ServerValue.TIMESTAMP;
    return this.afDB.object(`users/${uid}`).set({
      createdAt, name, email, avatar, country
    });
  }

  /**
   * Check email for uniqueness
   * @param email
   * @returns {firebase.Promise<string[]>}
   */
  public validateUniqueEmail(email: string): firebase.Promise<string[]> {
    return this.afAuth.auth.fetchProvidersForEmail(email);
  }

}
