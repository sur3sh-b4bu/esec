import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalLicenseRequest } from './planner-portal-license-request';

describe('PlannerPortalLicenseRequest', () => {
  let component: PlannerPortalLicenseRequest;
  let fixture: ComponentFixture<PlannerPortalLicenseRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalLicenseRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalLicenseRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
