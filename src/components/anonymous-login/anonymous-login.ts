import { Component } from '@angular/core';
import { NavController, LoadingController } from "ionic-angular";

import { TabsPage } from "../../pages/tabs/tabs";
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  selector: 'anonymous-login',
  templateUrl: 'anonymous-login.html'
})
export class AnonymousLoginComponent {

  constructor(
    private auth: AuthProvider,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {}

  async login() {
    const loader = this.loadingCtrl.create({
      content: "Logging in anonymously.."
    });

    loader.present();
    await this.auth.anonymousLogin();
    loader.dismiss();

    this.navCtrl.setRoot(TabsPage);
  }
}
