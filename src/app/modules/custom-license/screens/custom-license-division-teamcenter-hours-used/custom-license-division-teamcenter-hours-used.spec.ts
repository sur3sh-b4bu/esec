import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomLicenseDivisionTeamcenterHoursUsed } from './custom-license-division-teamcenter-hours-used';

describe('CustomLicenseDivisionTeamcenterHoursUsed', () => {
  let component: CustomLicenseDivisionTeamcenterHoursUsed;
  let fixture: ComponentFixture<CustomLicenseDivisionTeamcenterHoursUsed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLicenseDivisionTeamcenterHoursUsed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLicenseDivisionTeamcenterHoursUsed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
