import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganizationLongDuration } from './license-organization-long-duration.component';
import { DataSourceEngine } from '@framework/datasource';
import { of } from 'rxjs';

describe('LicenseOrganizationLongDuration', () => {
  let component: LicenseOrganizationLongDuration;
  let fixture: ComponentFixture<LicenseOrganizationLongDuration>;

  beforeEach(async () => {
    const dataSourceEngineStub = { load: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationLongDuration],
      providers: [
        { provide: DataSourceEngine, useValue: dataSourceEngineStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationLongDuration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
