import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSelectCountComponent } from './book-select-count.component';

describe('BookSelectCountComponent', () => {
  let component: BookSelectCountComponent;
  let fixture: ComponentFixture<BookSelectCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSelectCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSelectCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
