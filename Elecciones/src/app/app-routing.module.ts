import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'registro-eventos',
    loadChildren: () => import('./registro-eventos/registro-eventos.module').then( m => m.RegistroEventosPageModule)
  },
  {
    path: 'visualizacion-eventos',
    loadChildren: () => import('./visualizacion-eventos/visualizacion-eventos.module').then( m => m.VisualizacionEventosPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path: 'funcion-seguridad',
    loadChildren: () => import('./funcion-seguridad/funcion-seguridad.module').then( m => m.FuncionSeguridadPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
