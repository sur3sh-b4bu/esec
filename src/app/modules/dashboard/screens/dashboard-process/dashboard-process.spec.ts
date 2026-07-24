import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardProcess } from './dashboard-process';

describe('DashboardProcess', () => {
  let component: DashboardProcess;
  let fixture: ComponentFixture<DashboardProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProcess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProcess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
