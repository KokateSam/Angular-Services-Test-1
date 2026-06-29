import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deepartment } from './deepartment';

describe('Deepartment', () => {
  let component: Deepartment;
  let fixture: ComponentFixture<Deepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deepartment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
