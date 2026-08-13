import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseOrganizationBorrow } from './license-organization-borrow.component';
import { DataSourceEngine } from '@framework/datasource';
import { of } from 'rxjs';

describe('LicenseOrganizationBorrow', () => {
  let component: LicenseOrganizationBorrow;
  let fixture: ComponentFixture<LicenseOrganizationBorrow>;

  beforeEach(async () => {
    const dataSourceEngineStub = { load: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [LicenseOrganizationBorrow],
      providers: [
        { provide: DataSourceEngine, useValue: dataSourceEngineStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseOrganizationBorrow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
