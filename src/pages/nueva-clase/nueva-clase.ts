import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ClasesService} from "../../services/clases.service";


/**
 * Generated class for the NuevaClasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nueva-clase',
  templateUrl: 'nueva-clase.html',
})
export class NuevaClasePage {

  myDate = new Date();
  clase = {id: null, curso: null, asignatura: null, age: null};

  constructor(public navCtrl: NavController, public navParams: NavParams, public clasesService: ClasesService) {
  }

  crearClase() {
    console.log(this.clase);
    this.clase.age = this.myDate;
    if (this.clase.curso != null && this.clase.asignatura != null && this.clase.age != null) {
      this.clase.id = Date.now();
      this.clasesService.createclase(this.clase);
      this.navCtrl.push(HomePage);
    }
  }

  cancelar(){
    this.navCtrl.push('HomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaClasePage');
  }

}
