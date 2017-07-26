import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  template: `<router-outlet></router-outlet>`,
})
export class PacienteComponent implements OnInit {

  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  cpf: string;

  constructor() { }

  ngOnInit() {
  }

}
