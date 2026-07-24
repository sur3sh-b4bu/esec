import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSiteLicenseExpiry } from './multi-site-license-expiry';

describe('MultiSiteLicenseExpiry', () => {
  let component: MultiSiteLicenseExpiry;
  let fixture: ComponentFixture<MultiSiteLicenseExpiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSiteLicenseExpiry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSiteLicenseExpiry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
