import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListExampleComponent } from './book-list-example.component';

describe('BookListExampleComponent', () => {
  let component: BookListExampleComponent;
  let fixture: ComponentFixture<BookListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
