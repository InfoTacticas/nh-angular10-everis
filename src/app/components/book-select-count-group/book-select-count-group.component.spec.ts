import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSelectCountGroupComponent } from './book-select-count-group.component';

describe('BookSelectCountGroupComponent', () => {
  let component: BookSelectCountGroupComponent;
  let fixture: ComponentFixture<BookSelectCountGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSelectCountGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSelectCountGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
