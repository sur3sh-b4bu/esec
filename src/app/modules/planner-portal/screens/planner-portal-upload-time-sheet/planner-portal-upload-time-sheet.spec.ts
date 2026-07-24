import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalUploadTimeSheet } from './planner-portal-upload-time-sheet';

describe('PlannerPortalUploadTimeSheet', () => {
  let component: PlannerPortalUploadTimeSheet;
  let fixture: ComponentFixture<PlannerPortalUploadTimeSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalUploadTimeSheet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalUploadTimeSheet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
