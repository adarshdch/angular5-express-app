import { TestBed, inject } from '@angular/core/testing';

import { StaticScanService } from './static-scan.service';

describe('StaticScanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticScanService]
    });
  });

  it('should be created', inject([StaticScanService], (service: StaticScanService) => {
    expect(service).toBeTruthy();
  }));
});
