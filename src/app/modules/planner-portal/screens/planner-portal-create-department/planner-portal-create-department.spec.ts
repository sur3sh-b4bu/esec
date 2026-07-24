import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalCreateDepartment } from './planner-portal-create-department';

describe('PlannerPortalCreateDepartment', () => {
  let component: PlannerPortalCreateDepartment;
  let fixture: ComponentFixture<PlannerPortalCreateDepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalCreateDepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalCreateDepartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
