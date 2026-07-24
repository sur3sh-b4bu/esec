import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudJira } from './cloud-jira';

describe('CloudJira', () => {
  let component: CloudJira;
  let fixture: ComponentFixture<CloudJira>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudJira]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudJira);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
