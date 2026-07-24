import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAgentWindows } from './dashboard-agent-windows';

describe('DashboardAgentWindows', () => {
  let component: DashboardAgentWindows;
  let fixture: ComponentFixture<DashboardAgentWindows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAgentWindows]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAgentWindows);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
