// visualizacion-eventos.page.ts
import { Component } from '@angular/core';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-visualizacion-eventos',
  templateUrl: './visualizacion-eventos.page.html',
  styleUrls: ['./visualizacion-eventos.page.scss'],
})
export class VisualizacionEventosPage {
  eventos: any[] = [];
  eventoSeleccionado: any;

  constructor(private eventosService: EventosService) {
    this.eventos = this.eventosService.obtenerEventos();
  }

  verDetalle(evento: any) {
    this.eventoSeleccionado = evento;
  }
}
