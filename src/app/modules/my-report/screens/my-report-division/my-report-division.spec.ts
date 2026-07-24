import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyReportDivision } from './my-report-division';

describe('MyReportDivision', () => {
  let component: MyReportDivision;
  let fixture: ComponentFixture<MyReportDivision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReportDivision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReportDivision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
