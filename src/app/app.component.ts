import { Component } from '@angular/core';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CancionesComponent } from './canciones/canciones.component';
import { CancionComponent } from './cancion/cancion.component';
import { Cancion } from './cancion';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: true,
    imports: [CabeceraComponent, CancionesComponent, CancionComponent]
})
export class AppComponent {
  title = 'Cancionero';
  cancionSeleccionada?: Cancion;

  onCancionSeleccionadaEvent(cancion?: Cancion){
    this.cancionSeleccionada = cancion;
  }


 
}
