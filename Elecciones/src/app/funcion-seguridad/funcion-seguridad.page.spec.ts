import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionSeguridadPage } from './funcion-seguridad.page';

describe('FuncionSeguridadPage', () => {
  let component: FuncionSeguridadPage;
  let fixture: ComponentFixture<FuncionSeguridadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionSeguridadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
