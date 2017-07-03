import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PacienteComponent } from './paciente.component';
import { routing } from './paciente.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [PacienteComponent]
})
export class PacienteModule { }
