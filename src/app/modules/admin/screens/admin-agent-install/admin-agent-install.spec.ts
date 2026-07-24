import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAgentInstall } from './admin-agent-install';

describe('AdminAgentInstall', () => {
  let component: AdminAgentInstall;
  let fixture: ComponentFixture<AdminAgentInstall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAgentInstall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAgentInstall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
