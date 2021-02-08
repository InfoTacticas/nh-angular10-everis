import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptionFormComponent } from './suscription-form.component';

describe('SuscriptionFormComponent', () => {
  let component: SuscriptionFormComponent;
  let fixture: ComponentFixture<SuscriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscriptionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
