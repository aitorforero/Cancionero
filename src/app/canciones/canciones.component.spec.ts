import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesComponent } from './canciones.component';

describe('CancionesComponent', () => {
  let component: CancionesComponent;
  let fixture: ComponentFixture<CancionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CancionesComponent]
});
    fixture = TestBed.createComponent(CancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
