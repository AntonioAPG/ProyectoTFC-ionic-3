import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaClasePage } from './nueva-clase';
import {ClasesService} from "../../services/clases.service";

@NgModule({
  declarations: [
    NuevaClasePage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaClasePage),
  ],
  providers: [
    ClasesService
  ]
})
export class NuevaClasePageModule {}
