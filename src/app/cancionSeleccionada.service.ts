import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cancion } from './cancion';

@Injectable()
export class CancionSeleccionadaService {

  // Observable sources
  private cancionSeleccionadaChangedSource = new Subject<Cancion | undefined>();

  // Observable streams
  cancionSeleccionadaChanged$ = this.cancionSeleccionadaChangedSource.asObservable();

  // Service message commands
  seleccionaCancion(cancion?: Cancion) {
    this.cancionSeleccionadaChangedSource.next(cancion);
  }

}