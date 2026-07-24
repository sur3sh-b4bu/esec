import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardVendorExpiryUtilization } from './dashboard-vendor-expiry-utilization';

describe('DashboardVendorExpiryUtilization', () => {
  let component: DashboardVendorExpiryUtilization;
  let fixture: ComponentFixture<DashboardVendorExpiryUtilization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardVendorExpiryUtilization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardVendorExpiryUtilization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
