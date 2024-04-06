import { Component } from '@angular/core';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-funcion-seguridad',
  templateUrl: './funcion-seguridad.page.html',
  styleUrls: ['./funcion-seguridad.page.scss'],
})
export class FuncionSeguridadPage {

  constructor(private eventosService: EventosService) { }

  borrarRegistros() {
    this.eventosService.borrarRegistros();
    alert('¡Todos los registros han sido eliminados!');
  }

}
