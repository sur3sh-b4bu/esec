import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudCsi } from './cloud-csi';

describe('CloudCsi', () => {
  let component: CloudCsi;
  let fixture: ComponentFixture<CloudCsi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudCsi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudCsi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
