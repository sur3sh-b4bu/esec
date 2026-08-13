import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganizationCheckoutUser } from './license-organization-checkout-user.component';
import { DataSourceEngine } from '@framework/datasource';
import { of } from 'rxjs';

describe('LicenseOrganizationCheckoutUser', () => {
  let component: LicenseOrganizationCheckoutUser;
  let fixture: ComponentFixture<LicenseOrganizationCheckoutUser>;

  beforeEach(async () => {
    const dataSourceEngineStub = { load: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationCheckoutUser],
      providers: [
        { provide: DataSourceEngine, useValue: dataSourceEngineStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationCheckoutUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
