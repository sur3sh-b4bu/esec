import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudAft } from './cloud-aft';

describe('CloudAft', () => {
  let component: CloudAft;
  let fixture: ComponentFixture<CloudAft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudAft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudAft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
