import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSiteAgentUserProcessComputer } from './multi-site-agent-user-process-computer';

describe('MultiSiteAgentUserProcessComputer', () => {
  let component: MultiSiteAgentUserProcessComputer;
  let fixture: ComponentFixture<MultiSiteAgentUserProcessComputer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSiteAgentUserProcessComputer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSiteAgentUserProcessComputer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
