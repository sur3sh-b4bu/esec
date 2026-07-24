import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudIserve } from './cloud-iserve';

describe('CloudIserve', () => {
  let component: CloudIserve;
  let fixture: ComponentFixture<CloudIserve>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudIserve]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudIserve);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
