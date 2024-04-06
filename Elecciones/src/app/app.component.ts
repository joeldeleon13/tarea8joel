import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Registro de Eventos', url: '/registro-eventos', icon: 'create' },
    { title: 'Visualización de Eventos', url: '/visualizacion-eventos', icon: 'list' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'information-circle' },
    { title: 'Función de Seguridad', url: '/funcion-seguridad', icon: 'shield' }
  ];

  constructor() {}
}
