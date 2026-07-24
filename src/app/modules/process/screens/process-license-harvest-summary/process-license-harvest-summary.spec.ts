import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessLicenseHarvestSummary } from './process-license-harvest-summary';

describe('ProcessLicenseHarvestSummary', () => {
  let component: ProcessLicenseHarvestSummary;
  let fixture: ComponentFixture<ProcessLicenseHarvestSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessLicenseHarvestSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessLicenseHarvestSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
