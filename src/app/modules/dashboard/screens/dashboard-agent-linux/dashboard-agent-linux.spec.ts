import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAgentLinux } from './dashboard-agent-linux';

describe('DashboardAgentLinux', () => {
  let component: DashboardAgentLinux;
  let fixture: ComponentFixture<DashboardAgentLinux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAgentLinux]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAgentLinux);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
