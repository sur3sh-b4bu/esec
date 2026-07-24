import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseDebugData } from './license-debug-data';

describe('LicenseDebugData', () => {
  let component: LicenseDebugData;
  let fixture: ComponentFixture<LicenseDebugData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseDebugData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseDebugData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
