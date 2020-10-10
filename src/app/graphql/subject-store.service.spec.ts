import { TestBed } from '@angular/core/testing';

import { SubjectStoreService } from './subject-store.service';

describe('SubjectStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectStoreService = TestBed.get(SubjectStoreService);
    expect(service).toBeTruthy();
  });
});
