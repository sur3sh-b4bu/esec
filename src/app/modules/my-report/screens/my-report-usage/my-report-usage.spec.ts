import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyReportUsage } from './my-report-usage';

describe('MyReportUsage', () => {
  let component: MyReportUsage;
  let fixture: ComponentFixture<MyReportUsage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReportUsage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReportUsage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
