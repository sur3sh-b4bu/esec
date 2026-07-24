import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardOnPrem } from './dashboard-on-prem';

describe('DashboardOnPrem', () => {
  let component: DashboardOnPrem;
  let fixture: ComponentFixture<DashboardOnPrem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardOnPrem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardOnPrem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
