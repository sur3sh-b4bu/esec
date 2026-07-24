import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAgent } from './admin-agent.component';

describe('AdminAgent', () => {
  let component: AdminAgent;
  let fixture: ComponentFixture<AdminAgent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAgent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminAgent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
