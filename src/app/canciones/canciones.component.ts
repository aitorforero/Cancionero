import { Component } from '@angular/core';
import { CANCIONES } from '../mock-canciones'; 

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.sass']
})
export class CancionesComponent {
  canciones = CANCIONES;
}
