import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganizationHistory } from './license-organization-history.component';
import { DataSourceEngine } from '@framework/datasource';
import { of } from 'rxjs';

describe('LicenseOrganizationHistory', () => {
  let component: LicenseOrganizationHistory;
  let fixture: ComponentFixture<LicenseOrganizationHistory>;

  beforeEach(async () => {
    const dataSourceEngineStub = { load: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationHistory],
      providers: [
        { provide: DataSourceEngine, useValue: dataSourceEngineStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
