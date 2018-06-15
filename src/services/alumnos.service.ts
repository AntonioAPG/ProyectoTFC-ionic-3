import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class AlumnosService{

  constructor(public afDB: AngularFireDatabase){

  }

  public getAlumnos(){
    return this.afDB.list('alumnos/').valueChanges();
  }

  public getAlumno(id){
    return this.afDB.object('alumnos/' + id);
  }

  public createAlumno(alumno){
    this.afDB.database.ref('alumnos/' + alumno.id).set(alumno);
  }

  public edit(alumno){
    this.afDB.database.ref('alumnos/' + alumno.id).set(alumno);
  }

  public borrar(alumno){
    this.afDB.database.ref('alumnos/' + alumno.id).remove();
  }
}
