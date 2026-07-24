import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseManagerCheckout } from './license-manager-checkout';

describe('LicenseManagerCheckout', () => {
  let component: LicenseManagerCheckout;
  let fixture: ComponentFixture<LicenseManagerCheckout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseManagerCheckout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseManagerCheckout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
