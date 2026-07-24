import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudHexagon } from './cloud-hexagon';

describe('CloudHexagon', () => {
  let component: CloudHexagon;
  let fixture: ComponentFixture<CloudHexagon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudHexagon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudHexagon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
