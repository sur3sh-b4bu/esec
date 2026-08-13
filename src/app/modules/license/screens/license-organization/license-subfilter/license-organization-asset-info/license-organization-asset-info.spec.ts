import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganizationAssetInfo } from './license-organization-asset-info.component';
import { DataSourceEngine } from '@framework/datasource';
import { of } from 'rxjs';

describe('LicenseOrganizationAssetInfo', () => {
  let component: LicenseOrganizationAssetInfo;
  let fixture: ComponentFixture<LicenseOrganizationAssetInfo>;

  beforeEach(async () => {
    const dataSourceEngineStub = { load: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationAssetInfo],
      providers: [
        { provide: DataSourceEngine, useValue: dataSourceEngineStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationAssetInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
