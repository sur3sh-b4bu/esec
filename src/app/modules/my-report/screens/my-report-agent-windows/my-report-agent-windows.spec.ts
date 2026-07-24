import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyReportAgentWindows } from './my-report-agent-windows';

describe('MyReportAgentWindows', () => {
  let component: MyReportAgentWindows;
  let fixture: ComponentFixture<MyReportAgentWindows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReportAgentWindows]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReportAgentWindows);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
