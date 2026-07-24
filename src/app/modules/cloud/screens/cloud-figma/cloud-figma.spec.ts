import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudFigma } from './cloud-figma';

describe('CloudFigma', () => {
  let component: CloudFigma;
  let fixture: ComponentFixture<CloudFigma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudFigma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudFigma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
