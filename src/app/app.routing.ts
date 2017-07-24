import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//import { PacienteAddComponent} from  './pages/paciente/paciente-add/paciente-add.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' }
  //{path: 'paciente/add', component: PacienteAddComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
