import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalRecharge } from './planner-portal-recharge';

describe('PlannerPortalRecharge', () => {
  let component: PlannerPortalRecharge;
  let fixture: ComponentFixture<PlannerPortalRecharge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalRecharge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalRecharge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
