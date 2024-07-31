import { TestBed } from '@angular/core/testing';

import { TypeDateFilterService } from './type-date-filter.service';

describe('TypeDateFilterService', () => {
  let service: TypeDateFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeDateFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
