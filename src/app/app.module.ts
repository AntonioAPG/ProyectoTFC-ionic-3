import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {ClasesPage} from '../pages/clases/clases';
import {AlumnosPage} from '../pages/alumnos/alumnos';
import {HomePage} from '../pages/home/home';
// import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {InicioPage} from "../pages/inicio/inicio";

import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AlumnosService} from "../services/alumnos.service";
import {ClasesService} from "../services/clases.service";

export const firebaseConfig = {
  apiKey: "A***********************************k",
  authDomain: "tfgprueba-2b1ff.firebaseapp.com",
  databaseURL: "https://tfgprueba-2b1ff.firebaseio.com",
  projectId: "tfgprueba-2b1ff",
  storageBucket: "tfgprueba-2b1ff.appspot.com",
  messagingSenderId: "6*************4"
};

@NgModule({
  declarations: [
    MyApp,
    ClasesPage,
    AlumnosPage,
    HomePage,
    // TabsPage,
    InicioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClasesPage,
    AlumnosPage,
    HomePage,
    // TabsPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlumnosService,
    ClasesService
  ]
})
export class AppModule {
}
