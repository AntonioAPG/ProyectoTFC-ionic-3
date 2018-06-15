import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AlumnosService} from "../../services/alumnos.service";


@Component({
  selector: 'page-alumnos',
  templateUrl: 'alumnos.html'
})
export class AlumnosPage {

  idClase = null;
  alumnos = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public alumnosService: AlumnosService) {
    this.idClase = navParams.get('id');
    this.alumnosService.getAlumnos().subscribe(alumnos => {
      console.log(alumnos);
      this.alumnos = alumnos;
    });
  }

  itemSelected(alumno) {
    this.navCtrl.push('AlumnoPage', {id:alumno.id});
  }

}
