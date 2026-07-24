import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomLicenseDivisionLicenseHoursUsed } from './custom-license-division-license-hours-used';

describe('CustomLicenseDivisionLicenseHoursUsed', () => {
  let component: CustomLicenseDivisionLicenseHoursUsed;
  let fixture: ComponentFixture<CustomLicenseDivisionLicenseHoursUsed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLicenseDivisionLicenseHoursUsed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLicenseDivisionLicenseHoursUsed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
