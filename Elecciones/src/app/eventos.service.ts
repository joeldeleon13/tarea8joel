import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private eventos: any[] = [];

  constructor() {
    // Obtener eventos del almacenamiento local al iniciar el servicio
    const eventosGuardados = localStorage.getItem('eventos');
    if (eventosGuardados) {
      this.eventos = JSON.parse(eventosGuardados);
    }
  }

  // Método para obtener todos los eventos
  obtenerEventos(): any[] {
    return this.eventos;
  }

  // Método para guardar un nuevo evento
  guardarEvento(evento: any): void {
    this.eventos.push(evento);
    // Guardar eventos en el almacenamiento local
    localStorage.setItem('eventos', JSON.stringify(this.eventos));
  }

  // Método para borrar todos los registros de eventos
  borrarRegistros(): void {
    localStorage.removeItem('eventos');
    this.eventos = []; // Limpiar la lista de eventos
  }

  // Otros métodos para editar o eliminar eventos si los necesitas
}
