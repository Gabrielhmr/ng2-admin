import { Component, OnInit } from '@angular/core';
import { PacienteComponent } from '../paciente.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-paciente-add',
  templateUrl: './paciente-add.component.html',
  styleUrls: ['./paciente-add.component.scss']
})
export class PacienteAddComponent implements OnInit {

  paciente: PacienteComponent = new PacienteComponent();
  pacienteList: FirebaseListObservable<any>;
  pacienteId: string;
  p: FirebaseObjectObservable<any>;

  constructor(db: AngularFireDatabase, route: ActivatedRoute) {

    this.pacienteList = db.list('/pacientes');
    this.pacienteId = route.snapshot.params['id'];

     if (this.pacienteId !== undefined) {

        this.p = db.object('/pacientes/'+ this.pacienteId, { preserveSnapshot: true });
        this.p.subscribe(snapshot => {
          this.paciente = snapshot.val()
        });
     }

  }

  saveOrUpdate() {
    if (this.pacienteId !== undefined) {
        this.updateItem();
    }else {
        this.addItem();
    }
  }

  addItem() {
    this.pacienteList.push(this.paciente);
  }
  updateItem() {
    this.pacienteList.update(this.pacienteId, this.paciente);
  }

  ngOnInit() {
  }


}
