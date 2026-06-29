import { TestBed } from '@angular/core/testing';

import { SaveData } from './save-data';

describe('SaveData', () => {
  let service: SaveData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
