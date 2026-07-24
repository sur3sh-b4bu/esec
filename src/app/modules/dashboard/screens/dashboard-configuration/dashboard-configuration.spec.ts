import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardConfiguration } from './dashboard-configuration';

describe('DashboardConfiguration', () => {
  let component: DashboardConfiguration;
  let fixture: ComponentFixture<DashboardConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
