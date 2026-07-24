import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardDepartmentSummary1 } from './dashboard-department-summary-1';

describe('DashboardDepartmentSummary1', () => {
  let component: DashboardDepartmentSummary1;
  let fixture: ComponentFixture<DashboardDepartmentSummary1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDepartmentSummary1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDepartmentSummary1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
