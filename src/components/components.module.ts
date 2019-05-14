import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { AnonymousLoginComponent } from './anonymous-login/anonymous-login';
import { FacebookLoginComponent } from './facebook-login/facebook-login';
@NgModule({
	declarations: [AnonymousLoginComponent,
    FacebookLoginComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
	exports: [AnonymousLoginComponent,
    FacebookLoginComponent]
})
export class ComponentsModule {}
