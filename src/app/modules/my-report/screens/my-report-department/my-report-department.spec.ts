import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyReportDepartment } from './my-report-department';

describe('MyReportDepartment', () => {
  let component: MyReportDepartment;
  let fixture: ComponentFixture<MyReportDepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReportDepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReportDepartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
