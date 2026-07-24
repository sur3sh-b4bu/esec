import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalTimeSheetReport } from './planner-portal-time-sheet-report';

describe('PlannerPortalTimeSheetReport', () => {
  let component: PlannerPortalTimeSheetReport;
  let fixture: ComponentFixture<PlannerPortalTimeSheetReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalTimeSheetReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalTimeSheetReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
