import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseManagerFeature } from './license-manager-feature';

describe('LicenseManagerFeature', () => {
  let component: LicenseManagerFeature;
  let fixture: ComponentFixture<LicenseManagerFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseManagerFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseManagerFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
