import { Routes, RouterModule } from '@angular/router';

import { PacienteComponent } from './paciente.component';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteAddComponent } from './paciente-add/paciente-add.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: PacienteListComponent,
  },
];

export const routing = RouterModule.forChild(routes);
