import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
import * as firebase from "firebase/app";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { switchMap, take } from "rxjs/operators";

import { Facebook } from "@ionic-native/facebook/ngx";
@Injectable()
export class AuthProvider {
  user: Observable<any>;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private facebook: Facebook,
    private platform: Platform
  ) {

    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        console.log(user);
        if(user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      })
    );
  }

  // Save custom user data in Firestore
  private updateUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'guest',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
    };

    return userRef.set(data, { merge: true });
  }

  //// ANONYMOUS LOGIN ////

  async anonymousLogin(): Promise<void> {
    const data = await this.afAuth.auth.signInAnonymously();
    await this.updateUserData(data.user);
  }

  //// FACEBOOK LOGIN ////

  async facebookLogin() {
    if(this.platform.is('cordova')) {
      return await this.nativeFacebookLogin();
    } else {
      return await this.webFacebookLogin();
    }
  }

  async webFacebookLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

      return await this.updateUserData(credential.user);
    } catch (error) {
      console.error(error);
    }
  }

  async nativeFacebookLogin(): Promise<void> {
    try {
      const response = await this.facebook.login(['email', 'public_profile']);
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

      const firebaseUser = await firebase
        .auth()
        .signInWithCredential(facebookCredential);

      return await this.updateUserData(firebaseUser);
    } catch (error) {
      console.error(error);
    }
  }

  //// HELPERS ////

  // Current user as Promise. Useful for one-off operations
  getCurrentUser(): Promise<any> {
    return this.user.pipe(take(1)).toPromise();
  }
}


