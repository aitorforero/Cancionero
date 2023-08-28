import { Component } from '@angular/core';

import { CANCIONES } from '../mock-canciones';
import { MatTableModule } from '@angular/material/table'; 

@Component({
    selector: 'app-canciones',
    templateUrl: './canciones.component.html',
    styleUrls: ['./canciones.component.sass'],
    standalone: true,
    imports: [MatTableModule]
})
export class CancionesComponent {
  columnsToDisplay = ['id', 'nombre'];
  canciones = CANCIONES;
}
