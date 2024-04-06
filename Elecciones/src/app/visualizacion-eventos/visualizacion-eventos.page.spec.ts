import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizacionEventosPage } from './visualizacion-eventos.page';

describe('VisualizacionEventosPage', () => {
  let component: VisualizacionEventosPage;
  let fixture: ComponentFixture<VisualizacionEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
