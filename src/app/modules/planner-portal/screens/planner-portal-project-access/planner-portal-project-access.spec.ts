import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalProjectAccess } from './planner-portal-project-access';

describe('PlannerPortalProjectAccess', () => {
  let component: PlannerPortalProjectAccess;
  let fixture: ComponentFixture<PlannerPortalProjectAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalProjectAccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalProjectAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
