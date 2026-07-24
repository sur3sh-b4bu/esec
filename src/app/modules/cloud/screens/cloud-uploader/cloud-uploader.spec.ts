import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudUploader } from './cloud-uploader';

describe('CloudUploader', () => {
  let component: CloudUploader;
  let fixture: ComponentFixture<CloudUploader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudUploader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudUploader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
