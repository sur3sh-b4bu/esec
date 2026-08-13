import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganizationDebugData } from './license-organization-debug-data.component';
import { DataSourceEngine } from '@framework/datasource';
import { of } from 'rxjs';

describe('LicenseOrganizationDebugData', () => {
  let component: LicenseOrganizationDebugData;
  let fixture: ComponentFixture<LicenseOrganizationDebugData>;

  beforeEach(async () => {
    const dataSourceEngineStub = { load: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationDebugData],
      providers: [
        { provide: DataSourceEngine, useValue: dataSourceEngineStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationDebugData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
