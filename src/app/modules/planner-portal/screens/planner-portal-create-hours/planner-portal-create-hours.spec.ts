import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalCreateHours } from './planner-portal-create-hours';

describe('PlannerPortalCreateHours', () => {
  let component: PlannerPortalCreateHours;
  let fixture: ComponentFixture<PlannerPortalCreateHours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalCreateHours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalCreateHours);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
