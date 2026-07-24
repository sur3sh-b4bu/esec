import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSiteAgentLicenseHarvest } from './multi-site-agent-license-harvest';

describe('MultiSiteAgentLicenseHarvest', () => {
  let component: MultiSiteAgentLicenseHarvest;
  let fixture: ComponentFixture<MultiSiteAgentLicenseHarvest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSiteAgentLicenseHarvest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSiteAgentLicenseHarvest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
