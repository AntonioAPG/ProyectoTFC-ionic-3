import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from "../../models/user";
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginAuth: AngularFireAuth, private alertCtrl: AlertController) {
  }

  async login(user: User) {
    // try {
    // console.log('prueba: ' + result['k']);
    // if(result){
    //   this.navCtrl.push('TabsPage');
    // }else{
    //   this.navCtrl.push('LoginPage');
    // }
    // const result = this.loginAuth.auth.signInWithEmailAndPassword(user.email, user.password);

    this.loginAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(data => {
      console.log("Login ok");
      this.navCtrl.push('TabsPage');
      this.alert('BIENVENIDO', 'estas logueado');
    }).catch(error => {
      console.error('ERROR en el login');
      this.alert('Error', error);
      console.log('termina');
    });
  }

  login2(){
    this.navCtrl.push('TabsPage');
  }

  alert(titulo, mensaje) {
    this.alertCtrl.create({
      title: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
