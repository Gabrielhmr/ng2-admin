import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteListComponent } from './paciente-list.component';

describe('PacienteListComponent', () => {
  let component: PacienteListComponent;
  let fixture: ComponentFixture<PacienteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
