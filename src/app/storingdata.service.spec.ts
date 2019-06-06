import { TestBed } from '@angular/core/testing';

import { StoringdataService } from './storingdata.service';

describe('StoringdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoringdataService = TestBed.get(StoringdataService);
    expect(service).toBeTruthy();
  });
});
