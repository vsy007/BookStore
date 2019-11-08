import { TestBed } from '@angular/core/testing';

import { NewBooksService } from './new-books.service';

describe('NewBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewBooksService = TestBed.get(NewBooksService);
    expect(service).toBeTruthy();
  });
});
