import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganizationUtilizationAndHours } from './license-organization-utilization-and-hours.component';
import { DataSourceEngine } from '@framework/datasource';
import { of } from 'rxjs';

describe('LicenseOrganizationUtilizationAndHours', () => {
  let component: LicenseOrganizationUtilizationAndHours;
  let fixture: ComponentFixture<LicenseOrganizationUtilizationAndHours>;

  beforeEach(async () => {
    const dataSourceEngineStub = { load: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationUtilizationAndHours],
      providers: [
        { provide: DataSourceEngine, useValue: dataSourceEngineStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationUtilizationAndHours);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
