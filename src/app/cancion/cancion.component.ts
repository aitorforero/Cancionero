import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cancion } from '../cancion';

@Component({
  selector: 'app-cancion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.sass']
})
export class CancionComponent {
  @Input() cancion: Cancion = {id: 0, titulo: '', contenido: ''};
}
