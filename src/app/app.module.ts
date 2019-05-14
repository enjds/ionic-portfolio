import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { Firebase } from '@ionic-native/firebase/ngx';
import { Facebook } from "@ionic-native/facebook/ngx";

const firebaseConfig = {
  apiKey: "AIzaSyD0qJG28zGDvusQM2N3N6_nOMKMqGXm9us",
  authDomain: "ionic-portfolio-43fb4.firebaseapp.com",
  databaseURL: "https://ionic-portfolio-43fb4.firebaseio.com",
  projectId: "ionic-portfolio-43fb4",
  storageBucket: "ionic-portfolio-43fb4.appspot.com",
  messagingSenderId: "679510883071",
  appId: "1:679510883071:web:6a92059c5473617e"
};

import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase,
    Facebook,
    AuthProvider
  ]
})
export class AppModule {}
