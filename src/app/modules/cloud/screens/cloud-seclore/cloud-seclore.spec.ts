import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudSeclore } from './cloud-seclore';

describe('CloudSeclore', () => {
  let component: CloudSeclore;
  let fixture: ComponentFixture<CloudSeclore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudSeclore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudSeclore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
