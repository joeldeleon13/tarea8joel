import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionSeguridadPage } from './funcion-seguridad.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionSeguridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionSeguridadPageRoutingModule {}
