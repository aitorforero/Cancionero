import {LiveAnnouncer } from '@angular/cdk/a11y';
import {Component, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { CANCIONES } from '../mock-canciones';
import { Cancion } from '../cancion';
import { CancionSeleccionadaService } from '../cancionSeleccionada.service';

@Component({
    selector: 'app-canciones',
    templateUrl: './canciones.component.html',
    styleUrls: ['./canciones.component.sass'],
    standalone: true,
    imports: [MatTableModule, MatSortModule]
})
export class CancionesComponent  {

  columnsToDisplay = ['id', 'titulo'];
  canciones = new MatTableDataSource(CANCIONES);
  cancionSeleccionada? : Cancion;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _cancionSeleccionadaService: CancionSeleccionadaService) {}

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.canciones.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  setCancionSeleccionada(value?: Cancion) {
    this.cancionSeleccionada = value;
    this._cancionSeleccionadaService.seleccionaCancion(value);
  }
}
