import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectPortalCreateProjects } from './project-portal-create-projects';

describe('ProjectPortalCreateProjects', () => {
  let component: ProjectPortalCreateProjects;
  let fixture: ComponentFixture<ProjectPortalCreateProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPortalCreateProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPortalCreateProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
