import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionSeguridadPageRoutingModule } from './funcion-seguridad-routing.module';

import { FuncionSeguridadPage } from './funcion-seguridad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionSeguridadPageRoutingModule
  ],
  declarations: [FuncionSeguridadPage]
})
export class FuncionSeguridadPageModule {}
