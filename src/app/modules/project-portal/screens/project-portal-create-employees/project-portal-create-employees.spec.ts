import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectPortalCreateEmployees } from './project-portal-create-employees';

describe('ProjectPortalCreateEmployees', () => {
  let component: ProjectPortalCreateEmployees;
  let fixture: ComponentFixture<ProjectPortalCreateEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPortalCreateEmployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPortalCreateEmployees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
