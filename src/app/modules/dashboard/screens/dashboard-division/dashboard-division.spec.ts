import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardDivision } from './dashboard-division';

describe('DashboardDivision', () => {
  let component: DashboardDivision;
  let fixture: ComponentFixture<DashboardDivision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDivision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDivision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
