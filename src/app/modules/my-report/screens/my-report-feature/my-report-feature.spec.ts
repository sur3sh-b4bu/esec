import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyReportFeature } from './my-report-feature';

describe('MyReportFeature', () => {
  let component: MyReportFeature;
  let fixture: ComponentFixture<MyReportFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReportFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReportFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
