import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudAltium } from './cloud-altium';

describe('CloudAltium', () => {
  let component: CloudAltium;
  let fixture: ComponentFixture<CloudAltium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudAltium]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudAltium);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
