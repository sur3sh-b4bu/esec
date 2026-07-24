import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSiteAgentProcessType1 } from './multi-site-agent-process-type-1';

describe('MultiSiteAgentProcessType1', () => {
  let component: MultiSiteAgentProcessType1;
  let fixture: ComponentFixture<MultiSiteAgentProcessType1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSiteAgentProcessType1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSiteAgentProcessType1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
