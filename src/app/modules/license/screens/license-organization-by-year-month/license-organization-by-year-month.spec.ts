import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganizationByYearMonth } from './license-organization-by-year-month';

describe('LicenseOrganizationByYearMonth', () => {
  let component: LicenseOrganizationByYearMonth;
  let fixture: ComponentFixture<LicenseOrganizationByYearMonth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationByYearMonth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationByYearMonth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
