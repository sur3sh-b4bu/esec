import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudMilestone } from './cloud-milestone';

describe('CloudMilestone', () => {
  let component: CloudMilestone;
  let fixture: ComponentFixture<CloudMilestone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudMilestone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudMilestone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
