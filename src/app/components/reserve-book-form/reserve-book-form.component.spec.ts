import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveBookFormComponent } from './reserve-book-form.component';

describe('ReserveBookFormComponent', () => {
  let component: ReserveBookFormComponent;
  let fixture: ComponentFixture<ReserveBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveBookFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
