import { Component } from '@angular/core';
import { CancionesComponent } from './canciones/canciones.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: true,
    imports: [CabeceraComponent, CancionesComponent]
})
export class AppComponent {
  title = 'Cancionero';
}
