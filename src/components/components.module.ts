import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { AnonymousLoginComponent } from './anonymous-login/anonymous-login';
import { FacebookLoginComponent } from './facebook-login/facebook-login';
import { UserLogoutComponent } from './user-logout/user-logout';
import { PostFeedComponent } from './post-feed/post-feed';
import { HeartButtonComponent } from './heart-button/heart-button';
@NgModule({
	declarations: [
    AnonymousLoginComponent,
    FacebookLoginComponent,
    UserLogoutComponent,
    PostFeedComponent,
    HeartButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
	exports: [
    AnonymousLoginComponent,
    FacebookLoginComponent,
    UserLogoutComponent,
    PostFeedComponent,
    HeartButtonComponent
  ]
})
export class ComponentsModule {}
