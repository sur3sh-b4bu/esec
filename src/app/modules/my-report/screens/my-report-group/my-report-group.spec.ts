import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyReportGroup } from './my-report-group';

describe('MyReportGroup', () => {
  let component: MyReportGroup;
  let fixture: ComponentFixture<MyReportGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReportGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReportGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
