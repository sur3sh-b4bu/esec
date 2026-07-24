import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalEstimationSheet } from './planner-portal-estimation-sheet';

describe('PlannerPortalEstimationSheet', () => {
  let component: PlannerPortalEstimationSheet;
  let fixture: ComponentFixture<PlannerPortalEstimationSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalEstimationSheet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalEstimationSheet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
