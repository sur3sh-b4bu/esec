import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardConsolidatedSoftwareSummary } from './dashboard-consolidated-software-summary';

describe('DashboardConsolidatedSoftwareSummary', () => {
  let component: DashboardConsolidatedSoftwareSummary;
  let fixture: ComponentFixture<DashboardConsolidatedSoftwareSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardConsolidatedSoftwareSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardConsolidatedSoftwareSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
