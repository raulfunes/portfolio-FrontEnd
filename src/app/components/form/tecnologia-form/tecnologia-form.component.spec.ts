import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaFormComponent } from './tecnologia-form.component';

describe('TecnologiaFormComponent', () => {
  let component: TecnologiaFormComponent;
  let fixture: ComponentFixture<TecnologiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
