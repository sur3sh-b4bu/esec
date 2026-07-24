import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganizationByWeek } from './license-organization-by-week.component';

describe('LicenseOrganizationByWeek', () => {
  let component: LicenseOrganizationByWeek;
  let fixture: ComponentFixture<LicenseOrganizationByWeek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationByWeek]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationByWeek);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
