import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthProvider } from "../../providers/auth/auth";
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'user-logout',
  templateUrl: 'user-logout.html'
})
export class UserLogoutComponent {

  constructor(
    private auth: AuthProvider,
    private navCtrl: NavController
  ) {}

  async logout() {
    await this.auth.logout();
    await this.navCtrl.setRoot(LoginPage);
  }

}
