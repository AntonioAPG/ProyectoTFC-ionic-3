import {Component} from '@angular/core';
import {AlertController, NavController, App} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {InicioPage} from "../inicio/inicio";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private loginAuth: AngularFireAuth, private alertCtrl: AlertController, public app: App) {
  }

  logout() {
    this.loginAuth.auth.signOut().then(data => {
      // this.navCtrl.push('LoginPage');
      this.app.getRootNav().setRoot(InicioPage);
      this.alert('ADIOS!!!', 'hasta pronto');
    }).catch(error => {
      this.alert('ERROR!!!', 'algo ha fallado lo siento');
    });
  }

  nuevaAula() {
    this.navCtrl.push('NuevaClasePage');
  }


  nuevoAlumno() {
    this.navCtrl.push('NuevoAlumnoPage');
  }

  alert(titulo, mensaje) {
    this.alertCtrl.create({
      title: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    }).present();
  }


}
