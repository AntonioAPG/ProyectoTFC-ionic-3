import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ClasesService} from "../../services/clases.service";
import {AlumnosPage} from "../alumnos/alumnos";

@Component({
  selector: 'page-clases',
  templateUrl: 'clases.html'
})
export class ClasesPage {
  clases = [];

  constructor(public navCtrl: NavController, public clasesService: ClasesService) {

    /**
     this.clasesService.getclases().once('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        console.log(childSnapshot.key);
        console.log(childSnapshot.val());
      });
    });


     this.clasesService.getclases().on('value', snapshot => {
      console.log('child_changed', snapshot.val());
      this.clases.push(snapshot.val());
    });
     **/

    this.clasesService.getclases().subscribe(clases => {
      this.clases =clases;
    });
  }

  itemSelected(clase){
    this.navCtrl.push(AlumnosPage);
  }


}
