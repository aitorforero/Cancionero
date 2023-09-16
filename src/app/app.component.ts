import { Component } from '@angular/core';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CancionesComponent } from './canciones/canciones.component';
import { CancionComponent } from './cancion/cancion.component';
import { CancionSeleccionadaService } from './cancionSeleccionada.service'; 

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: true,
    imports: [CabeceraComponent, CancionesComponent, CancionComponent],
    providers: [CancionSeleccionadaService]
})
export class AppComponent {
  title = 'Cancionero';
}
