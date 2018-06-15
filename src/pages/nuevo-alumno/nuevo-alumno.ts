import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AlumnosService} from "../../services/alumnos.service";
import {HomePage} from "../home/home";
import {ClasesService} from "../../services/clases.service";


/**
 * Generated class for the NuevoAlumnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-alumno',
  templateUrl: 'nuevo-alumno.html',
})
export class NuevoAlumnoPage {

  alumno = {id: null, clase: null, nombre: null, apellido: null, faltas: null};
  clasesAlumno = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alumnosService: AlumnosService, public clasesService: ClasesService) {
    this.clasesService.getclases().subscribe(clases => {
      this.clasesAlumno = clases;
    });
  }


  crearAlumno() {
    if (this.alumno.clase != null && this.alumno.nombre != null && this.alumno.apellido != null) {
      this.alumno.id = Date.now();
      this.alumno.faltas = 0;
      this.alumnosService.createAlumno(this.alumno);
      this.navCtrl.push(HomePage);
    }
  }

  cancelar() {
    this.navCtrl.push('HomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoAlumnoPage');
  }

}
