import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudCrowdstrike } from './cloud-crowdstrike';

describe('CloudCrowdstrike', () => {
  let component: CloudCrowdstrike;
  let fixture: ComponentFixture<CloudCrowdstrike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudCrowdstrike]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudCrowdstrike);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
