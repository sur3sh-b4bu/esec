import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerPortalMapSoftware } from './planner-portal-map-software';

describe('PlannerPortalMapSoftware', () => {
  let component: PlannerPortalMapSoftware;
  let fixture: ComponentFixture<PlannerPortalMapSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerPortalMapSoftware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerPortalMapSoftware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
