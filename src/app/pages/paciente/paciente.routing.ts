import { Routes, RouterModule } from '@angular/router';

import { PacienteComponent } from './paciente.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: PacienteComponent,
  },
];

export const routing = RouterModule.forChild(routes);
