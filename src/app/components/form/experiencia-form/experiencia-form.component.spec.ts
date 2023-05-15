import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaFormComponent } from './experiencia-form.component';

describe('ExperienciaFormComponent', () => {
  let component: ExperienciaFormComponent;
  let fixture: ComponentFixture<ExperienciaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
