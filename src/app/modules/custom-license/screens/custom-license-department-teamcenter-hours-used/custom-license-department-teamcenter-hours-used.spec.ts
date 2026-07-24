import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomLicenseDepartmentTeamcenterHoursUsed } from './custom-license-department-teamcenter-hours-used';

describe('CustomLicenseDepartmentTeamcenterHoursUsed', () => {
  let component: CustomLicenseDepartmentTeamcenterHoursUsed;
  let fixture: ComponentFixture<CustomLicenseDepartmentTeamcenterHoursUsed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLicenseDepartmentTeamcenterHoursUsed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLicenseDepartmentTeamcenterHoursUsed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
