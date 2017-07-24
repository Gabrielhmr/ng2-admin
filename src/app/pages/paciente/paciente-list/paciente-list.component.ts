import { Component, OnInit } from '@angular/core';
import { PacienteComponent } from '../paciente.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.scss']
})
export class PacienteListComponent implements OnInit {


// pacientes: PacienteComponent[] = [];
 // p: PacienteComponent = new PacienteComponent();
 pacientes: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.pacientes = db.list('/pacientes');
  }

  addItem(newName: string) {
    this.pacientes.push({ nome: newName, email: 'gmail', telefone: '251561561' });
  }
  updateItem(key: string, newText: string) {
    this.pacientes.update(key, { nome: newText });
  }
  deleteItem(key: string) {
    this.pacientes.remove(key);
  }

  ngOnInit() {
  }

}
