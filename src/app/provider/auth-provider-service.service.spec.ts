import { TestBed } from '@angular/core/testing';

import { AuthProviderServiceService } from './auth-provider-service.service';

describe('AuthProviderServiceService', () => {
  let service: AuthProviderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthProviderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
