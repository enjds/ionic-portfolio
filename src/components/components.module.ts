import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { AnonymousLoginComponent } from './anonymous-login/anonymous-login';
import { FacebookLoginComponent } from './facebook-login/facebook-login';
import { UserLogoutComponent } from './user-logout/user-logout';
@NgModule({
	declarations: [
    AnonymousLoginComponent,
    FacebookLoginComponent,
    UserLogoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
	exports: [
    AnonymousLoginComponent,
    FacebookLoginComponent,
    UserLogoutComponent
  ]
})
export class ComponentsModule {}
