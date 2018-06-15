import { Component } from '@angular/core';

import { ClasesPage } from '../clases/clases';
import { AlumnosPage } from '../alumnos/alumnos';
import { HomePage } from '../home/home';
import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ClasesPage;
  tab3Root = AlumnosPage;

  constructor() {

  }
}
