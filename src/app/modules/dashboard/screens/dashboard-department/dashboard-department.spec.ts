import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardDepartment } from './dashboard-department';

describe('DashboardDepartment', () => {
  let component: DashboardDepartment;
  let fixture: ComponentFixture<DashboardDepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDepartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
