import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from "../../models/user";
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private autentificacion: AngularFireAuth, private alertCtrl: AlertController) {
  }

  async registrar(user: User) {
    this.autentificacion.auth.createUserWithEmailAndPassword(user.email, user.password).then(data => {
      console.log('registro ok');
      this.navCtrl.push('TabsPage');
      this.alert('Bienvenido', 'Ha sido registrado correctamente');
    }).catch(error => {
      console.error('Error en el registro');
      this.alert('Error', error);
    });
  }

  alert(titulo, mensaje) {
    this.alertCtrl.create({
      title: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
