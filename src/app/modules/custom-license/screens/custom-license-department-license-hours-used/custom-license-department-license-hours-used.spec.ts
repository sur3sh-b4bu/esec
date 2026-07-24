import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomLicenseDepartmentLicenseHoursUsed } from './custom-license-department-license-hours-used';

describe('CustomLicenseDepartmentLicenseHoursUsed', () => {
  let component: CustomLicenseDepartmentLicenseHoursUsed;
  let fixture: ComponentFixture<CustomLicenseDepartmentLicenseHoursUsed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLicenseDepartmentLicenseHoursUsed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLicenseDepartmentLicenseHoursUsed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
