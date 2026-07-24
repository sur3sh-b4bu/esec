import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudGithub } from './cloud-github';

describe('CloudGithub', () => {
  let component: CloudGithub;
  let fixture: ComponentFixture<CloudGithub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudGithub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudGithub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
