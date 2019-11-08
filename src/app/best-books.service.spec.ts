import { TestBed } from '@angular/core/testing';

import { BestBooksService } from './best-books.service';

describe('BestBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestBooksService = TestBed.get(BestBooksService);
    expect(service).toBeTruthy();
  });
});
