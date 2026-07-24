import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalDepartmentProjectAccess } from './planner-portal-department-project-access';

describe('PlannerPortalDepartmentProjectAccess', () => {
  let component: PlannerPortalDepartmentProjectAccess;
  let fixture: ComponentFixture<PlannerPortalDepartmentProjectAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalDepartmentProjectAccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalDepartmentProjectAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
