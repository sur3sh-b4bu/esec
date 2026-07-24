import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareDashboardAgentUsageData } from './software-dashboard-agent-usage-data';

describe('SoftwareDashboardAgentUsageData', () => {
  let component: SoftwareDashboardAgentUsageData;
  let fixture: ComponentFixture<SoftwareDashboardAgentUsageData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDashboardAgentUsageData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDashboardAgentUsageData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
