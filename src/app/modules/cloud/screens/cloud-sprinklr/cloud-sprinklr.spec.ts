import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudSprinklr } from './cloud-sprinklr';

describe('CloudSprinklr', () => {
  let component: CloudSprinklr;
  let fixture: ComponentFixture<CloudSprinklr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudSprinklr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudSprinklr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
