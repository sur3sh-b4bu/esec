import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalLockSoftware } from './planner-portal-lock-software';

describe('PlannerPortalLockSoftware', () => {
  let component: PlannerPortalLockSoftware;
  let fixture: ComponentFixture<PlannerPortalLockSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalLockSoftware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalLockSoftware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
