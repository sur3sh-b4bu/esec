import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalPlannerAccess } from './planner-portal-planner-access';

describe('PlannerPortalPlannerAccess', () => {
  let component: PlannerPortalPlannerAccess;
  let fixture: ComponentFixture<PlannerPortalPlannerAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalPlannerAccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalPlannerAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
