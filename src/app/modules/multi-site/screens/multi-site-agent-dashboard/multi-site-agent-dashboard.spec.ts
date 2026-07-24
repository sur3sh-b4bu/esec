import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSiteAgentDashboard } from './multi-site-agent-dashboard';

describe('MultiSiteAgentDashboard', () => {
  let component: MultiSiteAgentDashboard;
  let fixture: ComponentFixture<MultiSiteAgentDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSiteAgentDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSiteAgentDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
