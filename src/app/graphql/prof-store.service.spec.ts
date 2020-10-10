import { TestBed } from '@angular/core/testing';

import { ProfStoreService } from './prof-store.service';

describe('ProfStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfStoreService = TestBed.get(ProfStoreService);
    expect(service).toBeTruthy();
  });
});
