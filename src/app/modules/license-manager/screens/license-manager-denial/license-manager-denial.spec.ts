import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseManagerDenial } from './license-manager-denial';

describe('LicenseManagerDenial', () => {
  let component: LicenseManagerDenial;
  let fixture: ComponentFixture<LicenseManagerDenial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseManagerDenial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseManagerDenial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
