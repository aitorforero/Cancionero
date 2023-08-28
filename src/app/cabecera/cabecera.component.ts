import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-cabecera',
    templateUrl: './cabecera.component.html',
    styleUrls: ['./cabecera.component.sass'],
    standalone: true,
    imports: [MatToolbarModule]
})
export class CabeceraComponent {
  @Input() title = ""
}
