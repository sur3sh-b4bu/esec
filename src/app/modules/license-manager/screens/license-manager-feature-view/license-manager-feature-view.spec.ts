import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseManagerFeatureView } from './license-manager-feature-view';

describe('LicenseManagerFeatureView', () => {
  let component: LicenseManagerFeatureView;
  let fixture: ComponentFixture<LicenseManagerFeatureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseManagerFeatureView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseManagerFeatureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
