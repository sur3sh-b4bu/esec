import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareDashboardOnPrem } from './software-dashboard-on-prem';

describe('SoftwareDashboardOnPrem', () => {
  let component: SoftwareDashboardOnPrem;
  let fixture: ComponentFixture<SoftwareDashboardOnPrem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDashboardOnPrem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDashboardOnPrem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
