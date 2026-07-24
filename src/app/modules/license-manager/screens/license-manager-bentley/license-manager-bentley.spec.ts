import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseManagerBentley } from './license-manager-bentley';

describe('LicenseManagerBentley', () => {
  let component: LicenseManagerBentley;
  let fixture: ComponentFixture<LicenseManagerBentley>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseManagerBentley]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseManagerBentley);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
