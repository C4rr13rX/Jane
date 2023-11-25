import { TestBed } from '@angular/core/testing';

import { SmartStorageService } from './smart-storage.service';

describe('SmartStorageService', () => {
  let service: SmartStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
