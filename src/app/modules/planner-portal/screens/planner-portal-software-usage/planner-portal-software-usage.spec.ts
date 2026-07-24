import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalSoftwareUsage } from './planner-portal-software-usage';

describe('PlannerPortalSoftwareUsage', () => {
  let component: PlannerPortalSoftwareUsage;
  let fixture: ComponentFixture<PlannerPortalSoftwareUsage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalSoftwareUsage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalSoftwareUsage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
