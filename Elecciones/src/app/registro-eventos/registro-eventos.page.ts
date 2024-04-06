// registro-eventos.page.ts
import { Component } from '@angular/core';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-registro-eventos',
  templateUrl: './registro-eventos.page.html',
  styleUrls: ['./registro-eventos.page.scss'],
})
export class RegistroEventosPage {
  titulo: string = '';
  fecha: string = '';
  descripcion: string = '';
  imagenSeleccionada: string | ArrayBuffer | null = null;

  constructor(private eventosService: EventosService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagenSeleccionada = reader.result;
    };
  }

  guardarEvento() {
    const evento = {
      titulo: this.titulo,
      fecha: this.fecha,
      descripcion: this.descripcion,
      imagen: this.imagenSeleccionada,
    };
    this.eventosService.guardarEvento(evento);
    console.log('Evento guardado:', evento);
  }
}
