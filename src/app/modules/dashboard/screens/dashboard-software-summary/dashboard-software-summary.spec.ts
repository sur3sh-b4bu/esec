import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardSoftwareSummary } from './dashboard-software-summary';

describe('DashboardSoftwareSummary', () => {
  let component: DashboardSoftwareSummary;
  let fixture: ComponentFixture<DashboardSoftwareSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSoftwareSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSoftwareSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
