import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalSoftwareStatus } from './planner-portal-software-status';

describe('PlannerPortalSoftwareStatus', () => {
  let component: PlannerPortalSoftwareStatus;
  let fixture: ComponentFixture<PlannerPortalSoftwareStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalSoftwareStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalSoftwareStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
