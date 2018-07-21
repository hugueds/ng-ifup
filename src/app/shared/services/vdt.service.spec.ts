import { TestBed, inject } from '@angular/core/testing';

import { VdtService } from './vdt.service';

describe('VdtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VdtService]
    });
  });

  it('should be created', inject([VdtService], (service: VdtService) => {
    expect(service).toBeTruthy();
  }));
});
