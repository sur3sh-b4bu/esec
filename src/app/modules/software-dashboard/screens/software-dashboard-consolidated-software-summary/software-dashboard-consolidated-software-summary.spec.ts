import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareDashboardConsolidatedSoftwareSummary } from './software-dashboard-consolidated-software-summary';

describe('SoftwareDashboardConsolidatedSoftwareSummary', () => {
  let component: SoftwareDashboardConsolidatedSoftwareSummary;
  let fixture: ComponentFixture<SoftwareDashboardConsolidatedSoftwareSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDashboardConsolidatedSoftwareSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDashboardConsolidatedSoftwareSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
