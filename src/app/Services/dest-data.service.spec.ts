import { TestBed } from '@angular/core/testing';

import { DestDataService } from './dest-data.service';

describe('DestDataService', () => {
  let service: DestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
