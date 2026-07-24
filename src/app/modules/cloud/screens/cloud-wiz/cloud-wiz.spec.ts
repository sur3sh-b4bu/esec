import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudWiz } from './cloud-wiz';

describe('CloudWiz', () => {
  let component: CloudWiz;
  let fixture: ComponentFixture<CloudWiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudWiz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudWiz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
