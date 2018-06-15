import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AlumnosService} from "../../services/alumnos.service";

/**
 * Generated class for the AlumnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alumno',
  templateUrl: 'alumno.html',
})
export class AlumnoPage {
  alumno = null;
  alumno2 = {id: null, nombre: null, apellido: null, faltas: null};

  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alumnosService: AlumnosService) {

    this.id = navParams.get('id');
    alumnosService.getAlumno(this.id).valueChanges().subscribe(alumno => {
        this.alumno = alumno;
        this.alumno2 = this.alumno;
      }
    );

  }

  falta() {
    if (this.alumno2.faltas == null) {
      this.alumno2.faltas = 1;
    } else {
      this.alumno2.faltas++;
    }
    this.alumnosService.edit(this.alumno2);
  }

  quitarFalta() {
    if (this.alumno2.faltas == null) {
      this.alumno2.faltas = 0;
    }
    else if (this.alumno2.faltas == 0) {
    }
    else {
      this.alumno2.faltas--;
    }
    this.alumnosService.edit(this.alumno2);
  }

  borrarAlumno() {
    this.alumnosService.borrar(this.alumno2);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumnoPage');
  }

}
