import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { CancionSeleccionadaService } from '../cancionSeleccionada.service';
import { Cancion } from '../cancion';

@Component({
  selector: 'app-cancion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.sass']
})
export class CancionComponent implements OnDestroy {

  cancion: Cancion;
  subscription: Subscription;


  constructor(private cancionSeleccionadaService: CancionSeleccionadaService) {
    this.cancion = this.getCancionVacia();
    this.subscription = cancionSeleccionadaService.cancionSeleccionadaChanged$.subscribe(
      cancion => {
        this.cancion = cancion || this.getCancionVacia();
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  private getCancionVacia() : Cancion {
    return  { id:0, titulo: '', contenido: '' }
  }
}
