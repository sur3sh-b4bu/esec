import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectPortalRecharge } from './project-portal-recharge';

describe('ProjectPortalRecharge', () => {
  let component: ProjectPortalRecharge;
  let fixture: ComponentFixture<ProjectPortalRecharge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPortalRecharge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPortalRecharge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
