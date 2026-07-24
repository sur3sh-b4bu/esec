import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareRegisterSoftwareUtilizationMonth } from './software-register-software-utilization-month';

describe('SoftwareRegisterSoftwareUtilizationMonth', () => {
  let component: SoftwareRegisterSoftwareUtilizationMonth;
  let fixture: ComponentFixture<SoftwareRegisterSoftwareUtilizationMonth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareRegisterSoftwareUtilizationMonth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareRegisterSoftwareUtilizationMonth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
