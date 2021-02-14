import { TestBed } from '@angular/core/testing';

import { BookMockService } from './book-mock.service';

describe('BookMockService', () => {
  let service: BookMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
