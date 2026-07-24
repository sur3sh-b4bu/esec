import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseReportType1 } from './license-report-type-1';

describe('LicenseReportType1', () => {
  let component: LicenseReportType1;
  let fixture: ComponentFixture<LicenseReportType1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseReportType1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseReportType1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
