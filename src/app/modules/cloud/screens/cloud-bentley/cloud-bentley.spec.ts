import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudBentley } from './cloud-bentley';

describe('CloudBentley', () => {
  let component: CloudBentley;
  let fixture: ComponentFixture<CloudBentley>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudBentley]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudBentley);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
