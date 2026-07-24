import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardSoftwareSummary1 } from './dashboard-software-summary-1';

describe('DashboardSoftwareSummary1', () => {
  let component: DashboardSoftwareSummary1;
  let fixture: ComponentFixture<DashboardSoftwareSummary1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSoftwareSummary1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSoftwareSummary1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
