import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseUsage } from './license-usage';

describe('LicenseUsage', () => {
  let component: LicenseUsage;
  let fixture: ComponentFixture<LicenseUsage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseUsage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseUsage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
