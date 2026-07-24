import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardProcessType2 } from './dashboard-process-type-2';

describe('DashboardProcessType2', () => {
  let component: DashboardProcessType2;
  let fixture: ComponentFixture<DashboardProcessType2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProcessType2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProcessType2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
