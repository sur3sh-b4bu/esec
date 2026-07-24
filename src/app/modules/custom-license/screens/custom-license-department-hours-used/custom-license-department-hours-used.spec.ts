import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomLicenseDepartmentHoursUsed } from './custom-license-department-hours-used';

describe('CustomLicenseDepartmentHoursUsed', () => {
  let component: CustomLicenseDepartmentHoursUsed;
  let fixture: ComponentFixture<CustomLicenseDepartmentHoursUsed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLicenseDepartmentHoursUsed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLicenseDepartmentHoursUsed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
