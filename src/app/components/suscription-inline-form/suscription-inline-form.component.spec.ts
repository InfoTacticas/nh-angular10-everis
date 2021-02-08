import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptionInlineFormComponent } from './suscription-inline-form.component';

describe('SuscriptionInlineFormComponent', () => {
  let component: SuscriptionInlineFormComponent;
  let fixture: ComponentFixture<SuscriptionInlineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscriptionInlineFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriptionInlineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
