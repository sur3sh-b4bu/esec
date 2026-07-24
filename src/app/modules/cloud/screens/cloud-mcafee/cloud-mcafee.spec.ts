import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudMcafee } from './cloud-mcafee';

describe('CloudMcafee', () => {
  let component: CloudMcafee;
  let fixture: ComponentFixture<CloudMcafee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudMcafee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudMcafee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
