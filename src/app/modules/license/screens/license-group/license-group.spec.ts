import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseGroup } from './license-group';

describe('LicenseGroup', () => {
  let component: LicenseGroup;
  let fixture: ComponentFixture<LicenseGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
