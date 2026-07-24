import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalLicenseRequestReport } from './planner-portal-license-request-report';

describe('PlannerPortalLicenseRequestReport', () => {
  let component: PlannerPortalLicenseRequestReport;
  let fixture: ComponentFixture<PlannerPortalLicenseRequestReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalLicenseRequestReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalLicenseRequestReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
