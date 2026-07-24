import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareDashboardOnCloud } from './software-dashboard-on-cloud';

describe('SoftwareDashboardOnCloud', () => {
  let component: SoftwareDashboardOnCloud;
  let fixture: ComponentFixture<SoftwareDashboardOnCloud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDashboardOnCloud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDashboardOnCloud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
