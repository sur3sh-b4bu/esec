import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseComputer } from './license-computer';

describe('LicenseComputer', () => {
  let component: LicenseComputer;
  let fixture: ComponentFixture<LicenseComputer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseComputer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseComputer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
