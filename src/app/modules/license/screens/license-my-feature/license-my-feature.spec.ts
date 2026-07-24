import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseMyFeature } from './license-my-feature';

describe('LicenseMyFeature', () => {
  let component: LicenseMyFeature;
  let fixture: ComponentFixture<LicenseMyFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseMyFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseMyFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
