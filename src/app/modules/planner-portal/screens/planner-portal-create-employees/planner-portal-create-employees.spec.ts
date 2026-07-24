import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalCreateEmployees } from './planner-portal-create-employees';

describe('PlannerPortalCreateEmployees', () => {
  let component: PlannerPortalCreateEmployees;
  let fixture: ComponentFixture<PlannerPortalCreateEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalCreateEmployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalCreateEmployees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
