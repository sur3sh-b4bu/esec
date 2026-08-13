import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganizationHeatmap } from './license-organization-heatmap.component';
import { DataSourceEngine } from '@framework/datasource';
import { of } from 'rxjs';

describe('LicenseOrganizationHeatmap', () => {
  let component: LicenseOrganizationHeatmap;
  let fixture: ComponentFixture<LicenseOrganizationHeatmap>;

  beforeEach(async () => {
    const dataSourceEngineStub = { load: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationHeatmap],
      providers: [
        { provide: DataSourceEngine, useValue: dataSourceEngineStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationHeatmap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

