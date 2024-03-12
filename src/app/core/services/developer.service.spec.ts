import { TestBed } from '@angular/core/testing';

import { DevelopersService } from './developer.service';

describe('DeveloperService', () => {
  let service: DevelopersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
