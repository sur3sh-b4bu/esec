import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessLicenseHarvest } from './process-license-harvest';

describe('ProcessLicenseHarvest', () => {
  let component: ProcessLicenseHarvest;
  let fixture: ComponentFixture<ProcessLicenseHarvest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessLicenseHarvest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessLicenseHarvest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
