import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShortComponent } from './book-short.component';

describe('BookShortComponent', () => {
  let component: BookShortComponent;
  let fixture: ComponentFixture<BookShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
