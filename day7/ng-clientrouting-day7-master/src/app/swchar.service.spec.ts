import { TestBed, inject } from '@angular/core/testing';

import { SwcharService } from './swchar.service';

describe('SwcharService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwcharService]
    });
  });

  it('should be created', inject([SwcharService], (service: SwcharService) => {
    expect(service).toBeTruthy();
  }));
});
