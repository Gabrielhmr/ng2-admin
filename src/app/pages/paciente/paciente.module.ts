import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PacienteComponent } from './paciente.component';
import { routing } from './paciente.routing';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteAddComponent } from './paciente-add/paciente-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [PacienteComponent, PacienteListComponent, PacienteAddComponent]
})
export class PacienteModule { }
