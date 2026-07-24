import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalDepartmentAccess } from './planner-portal-department-access';

describe('PlannerPortalDepartmentAccess', () => {
  let component: PlannerPortalDepartmentAccess;
  let fixture: ComponentFixture<PlannerPortalDepartmentAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalDepartmentAccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalDepartmentAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
