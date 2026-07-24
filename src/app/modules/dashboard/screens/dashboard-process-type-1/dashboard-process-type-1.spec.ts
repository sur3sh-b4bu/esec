import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardProcessType1 } from './dashboard-process-type-1';

describe('DashboardProcessType1', () => {
  let component: DashboardProcessType1;
  let fixture: ComponentFixture<DashboardProcessType1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProcessType1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProcessType1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
