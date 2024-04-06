import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizacionEventosPageRoutingModule } from './visualizacion-eventos-routing.module';

import { VisualizacionEventosPage } from './visualizacion-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizacionEventosPageRoutingModule
  ],
  declarations: [VisualizacionEventosPage]
})
export class VisualizacionEventosPageModule {}
