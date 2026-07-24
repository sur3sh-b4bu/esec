import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseAndAgentCombined } from './license-and-agent-combined';

describe('LicenseAndAgentCombined', () => {
  let component: LicenseAndAgentCombined;
  let fixture: ComponentFixture<LicenseAndAgentCombined>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseAndAgentCombined]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseAndAgentCombined);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
