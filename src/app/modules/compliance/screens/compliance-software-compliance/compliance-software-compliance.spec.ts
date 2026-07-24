import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplianceSoftwareCompliance } from './compliance-software-compliance';

describe('ComplianceSoftwareCompliance', () => {
  let component: ComplianceSoftwareCompliance;
  let fixture: ComponentFixture<ComplianceSoftwareCompliance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplianceSoftwareCompliance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceSoftwareCompliance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
