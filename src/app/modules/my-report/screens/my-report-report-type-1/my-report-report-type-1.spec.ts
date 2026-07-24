import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyReportReportType1 } from './my-report-report-type-1';

describe('MyReportReportType1', () => {
  let component: MyReportReportType1;
  let fixture: ComponentFixture<MyReportReportType1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReportReportType1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReportReportType1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
