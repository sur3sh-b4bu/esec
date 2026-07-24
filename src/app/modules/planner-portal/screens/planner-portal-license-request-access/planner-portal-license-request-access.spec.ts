import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalLicenseRequestAccess } from './planner-portal-license-request-access';

describe('PlannerPortalLicenseRequestAccess', () => {
  let component: PlannerPortalLicenseRequestAccess;
  let fixture: ComponentFixture<PlannerPortalLicenseRequestAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalLicenseRequestAccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalLicenseRequestAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
