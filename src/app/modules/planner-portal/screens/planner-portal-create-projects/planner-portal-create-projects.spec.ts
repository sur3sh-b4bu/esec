import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalCreateProjects } from './planner-portal-create-projects';

describe('PlannerPortalCreateProjects', () => {
  let component: PlannerPortalCreateProjects;
  let fixture: ComponentFixture<PlannerPortalCreateProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalCreateProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalCreateProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
