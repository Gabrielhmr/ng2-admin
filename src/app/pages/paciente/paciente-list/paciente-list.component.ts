import { Component, OnInit } from '@angular/core';
import { PacienteComponent } from '../paciente.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.scss']
})
export class PacienteListComponent implements OnInit {


 pacientes: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.pacientes = db.list('/pacientes');
  }

  deleteItem(key: string) {
    this.pacientes.remove(key);
  }

  ngOnInit() {
  }

}
