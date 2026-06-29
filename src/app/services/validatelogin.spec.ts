import { TestBed } from '@angular/core/testing';

import { Validatelogin } from './validatelogin';

describe('Validatelogin', () => {
  let service: Validatelogin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Validatelogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
