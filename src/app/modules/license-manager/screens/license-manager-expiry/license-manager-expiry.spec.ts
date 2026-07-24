import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseManagerExpiry } from './license-manager-expiry';

describe('LicenseManagerExpiry', () => {
  let component: LicenseManagerExpiry;
  let fixture: ComponentFixture<LicenseManagerExpiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseManagerExpiry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseManagerExpiry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
