import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseManagerService } from './license-manager-service';

describe('LicenseManagerService', () => {
  let component: LicenseManagerService;
  let fixture: ComponentFixture<LicenseManagerService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseManagerService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseManagerService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
