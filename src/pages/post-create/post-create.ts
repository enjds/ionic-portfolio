import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { DatabaseProvider, Post } from '../../providers/database/database';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-post-create',
  templateUrl: 'post-create.html',
})
export class PostCreatePage {

  post = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    private db: DatabaseProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostCreatePage');
  }

  async create(user) {
    await this.db.createPost(user.uid, this.post as Post);
    this.post = {};
    this.navCtrl.setRoot(HomePage);
  }
}
