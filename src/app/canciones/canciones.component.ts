import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { CANCIONES } from '../mock-canciones';
import { Cancion } from '../cancion';

@Component({
    selector: 'app-canciones',
    templateUrl: './canciones.component.html',
    styleUrls: ['./canciones.component.sass'],
    standalone: true,
    imports: [MatTableModule, MatSortModule]
})
export class CancionesComponent implements AfterViewInit  {
  @Output() cancionSeleccionadaEvent = new EventEmitter<Cancion>();
  cancionSeleccionada?: Cancion;

  columnsToDisplay = ['id', 'titulo'];

  canciones = new MatTableDataSource(CANCIONES);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

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
    this.cancionSeleccionadaEvent.emit(value);
  }
}
