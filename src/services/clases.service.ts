import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class ClasesService {
  list: null;

  constructor(public afDB: AngularFireDatabase) {

  }

  public getclases() {
    return this.afDB.list('clase/').valueChanges();

  }

  public getClase(id) {
    return this.afDB.object('clase/'+ id).valueChanges();

  }

  public createclase(clase) {
    this.afDB.database.ref('clase/' + clase.id).set(clase);
  }

}

