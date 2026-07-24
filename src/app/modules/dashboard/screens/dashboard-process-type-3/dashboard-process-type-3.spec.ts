import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardProcessType3 } from './dashboard-process-type-3';

describe('DashboardProcessType3', () => {
  let component: DashboardProcessType3;
  let fixture: ComponentFixture<DashboardProcessType3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProcessType3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProcessType3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
