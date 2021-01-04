import { TestBed } from '@angular/core/testing';

import { MatcherApiService } from './matcher-api.service';

describe('MatcherApiService', () => {
  let service: MatcherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatcherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
