import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudZoiper } from './cloud-zoiper';

describe('CloudZoiper', () => {
  let component: CloudZoiper;
  let fixture: ComponentFixture<CloudZoiper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudZoiper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudZoiper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
