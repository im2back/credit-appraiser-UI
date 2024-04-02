import { TestBed } from '@angular/core/testing';

import { AvaliadorServiceService } from './avaliador-service.service';

describe('AvaliadorServiceService', () => {
  let service: AvaliadorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliadorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
