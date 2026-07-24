import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalWfl } from './planner-portal-wfl';

describe('PlannerPortalWfl', () => {
  let component: PlannerPortalWfl;
  let fixture: ComponentFixture<PlannerPortalWfl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalWfl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalWfl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
