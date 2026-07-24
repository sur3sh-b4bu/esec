import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganization } from './license-organization.component';

describe('LicenseOrganization', () => {
  let component: LicenseOrganization;
  let fixture: ComponentFixture<LicenseOrganization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseOrganization]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LicenseOrganization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
