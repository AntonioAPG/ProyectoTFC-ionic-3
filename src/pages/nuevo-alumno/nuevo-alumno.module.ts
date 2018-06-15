import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoAlumnoPage } from './nuevo-alumno';
import {AlumnosService} from "../../services/alumnos.service";

@NgModule({
  declarations: [
    NuevoAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoAlumnoPage),
  ],
  providers: [
    AlumnosService
  ]
})
export class NuevoAlumnoPageModule {}
