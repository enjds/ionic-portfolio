import { Component } from '@angular/core';
import { NavController } from "ionic-angular";

import { TabsPage } from "../../pages/tabs/tabs";
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  selector: 'facebook-login',
  templateUrl: 'facebook-login.html'
})
export class FacebookLoginComponent {

  constructor(
    private auth: AuthProvider,
    private navCtrl: NavController
  ) {}

  async login() {
    this.auth.facebookLogin();
    this.navCtrl.setRoot(TabsPage);
  }

}
