import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganizationCheckoutCount } from './license-organization-checkout-count.component';
import { DataSourceEngine } from '@framework/datasource';
import { of } from 'rxjs';

describe('LicenseOrganizationCheckoutCount', () => {
  let component: LicenseOrganizationCheckoutCount;
  let fixture: ComponentFixture<LicenseOrganizationCheckoutCount>;

  beforeEach(async () => {
    const dataSourceEngineStub = { load: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationCheckoutCount],
      providers: [
        { provide: DataSourceEngine, useValue: dataSourceEngineStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationCheckoutCount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
