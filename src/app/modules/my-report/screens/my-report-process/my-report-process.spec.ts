import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyReportProcess } from './my-report-process';

describe('MyReportProcess', () => {
  let component: MyReportProcess;
  let fixture: ComponentFixture<MyReportProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReportProcess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReportProcess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
