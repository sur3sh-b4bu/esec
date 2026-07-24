import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseManagerLogs } from './license-manager-logs';

describe('LicenseManagerLogs', () => {
  let component: LicenseManagerLogs;
  let fixture: ComponentFixture<LicenseManagerLogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseManagerLogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseManagerLogs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
