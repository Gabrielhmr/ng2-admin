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
  { path: 'add', component: PacienteAddComponent },
  { path: 'edit/:id', component: PacienteAddComponent },
];

export const routing = RouterModule.forChild(routes);
