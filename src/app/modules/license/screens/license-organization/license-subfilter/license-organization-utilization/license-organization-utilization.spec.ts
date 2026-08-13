import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseOrganizationUtilization } from './license-organization-utilization.component';
import { DataSourceEngine } from '@framework/datasource';
import { of } from 'rxjs';

describe('LicenseOrganizationUtilization', () => {
  let component: LicenseOrganizationUtilization;
  let fixture: ComponentFixture<LicenseOrganizationUtilization>;

  beforeEach(async () => {
    const dataSourceEngineStub = { load: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationUtilization],
      providers: [
        { provide: DataSourceEngine, useValue: dataSourceEngineStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationUtilization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
