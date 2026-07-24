import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDepartmentSummary1 } from './admin-department-summary-1';

describe('AdminDepartmentSummary1', () => {
  let component: AdminDepartmentSummary1;
  let fixture: ComponentFixture<AdminDepartmentSummary1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDepartmentSummary1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDepartmentSummary1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
