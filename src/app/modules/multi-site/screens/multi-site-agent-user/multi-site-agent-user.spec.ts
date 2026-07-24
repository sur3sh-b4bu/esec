import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSiteAgentUser } from './multi-site-agent-user';

describe('MultiSiteAgentUser', () => {
  let component: MultiSiteAgentUser;
  let fixture: ComponentFixture<MultiSiteAgentUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSiteAgentUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSiteAgentUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
