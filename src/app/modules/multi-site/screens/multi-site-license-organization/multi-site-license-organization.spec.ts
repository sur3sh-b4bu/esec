import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSiteLicenseOrganization } from './multi-site-license-organization';

describe('MultiSiteLicenseOrganization', () => {
  let component: MultiSiteLicenseOrganization;
  let fixture: ComponentFixture<MultiSiteLicenseOrganization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSiteLicenseOrganization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSiteLicenseOrganization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
