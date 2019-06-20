import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GooglePlus } from '@ionic-native/google-plus';
import {Facebook} from "@ionic-native/facebook";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable()
export class AuthProvider {

  constructor(
    private googlePlus: GooglePlus,
    private facebook: Facebook
  ) {}

  googleLogin() {
    let a = new firebase.auth.GoogleAuthProvider()
    console.log(a);

    // this.googlePlus.login({
    //   'webClientId': '279163470610-vb8b1gtrtojogl56cagb72p76ampes6e.apps.googleusercontent.com',
    //   'offline': true
    // }).then( res => console.log(res))
    //   .catch(err => console.error(err));
  }

  facebookLogin(): Promise<any> {
    return this.facebook.login(['email', 'public_profile'])
      .then( response => {
        console.log('RESPONSE');
        console.log(response);
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential)
          .then( success => {
            console.log("Firebase success: " + JSON.stringify(success));
            // resolve(success);
          });
      }).catch((error) => {
        console.log(error);
        // reject(error);
      });
  }

  login(data, navCtrl) {
    return Promise.resolve()
  }
}
