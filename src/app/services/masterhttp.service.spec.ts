import { TestBed } from '@angular/core/testing';

import { MasterhttpService } from './masterhttp.service';

describe('MasterhttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterhttpService = TestBed.get(MasterhttpService);
    expect(service).toBeTruthy();
  });
});
