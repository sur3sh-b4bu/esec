import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardOnCloud } from './dashboard-on-cloud';

describe('DashboardOnCloud', () => {
  let component: DashboardOnCloud;
  let fixture: ComponentFixture<DashboardOnCloud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardOnCloud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardOnCloud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
