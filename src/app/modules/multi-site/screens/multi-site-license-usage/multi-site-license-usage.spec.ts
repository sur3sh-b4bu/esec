import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSiteLicenseUsage } from './multi-site-license-usage';

describe('MultiSiteLicenseUsage', () => {
  let component: MultiSiteLicenseUsage;
  let fixture: ComponentFixture<MultiSiteLicenseUsage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSiteLicenseUsage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSiteLicenseUsage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
