import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseManagerOpt } from './license-manager-opt';

describe('LicenseManagerOpt', () => {
  let component: LicenseManagerOpt;
  let fixture: ComponentFixture<LicenseManagerOpt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseManagerOpt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseManagerOpt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
