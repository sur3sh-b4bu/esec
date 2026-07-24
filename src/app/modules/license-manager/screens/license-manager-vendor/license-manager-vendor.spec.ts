import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseManagerVendor } from './license-manager-vendor';

describe('LicenseManagerVendor', () => {
  let component: LicenseManagerVendor;
  let fixture: ComponentFixture<LicenseManagerVendor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseManagerVendor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseManagerVendor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
