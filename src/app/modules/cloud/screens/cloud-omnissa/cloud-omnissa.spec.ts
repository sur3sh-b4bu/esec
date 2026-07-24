import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudOmnissa } from './cloud-omnissa';

describe('CloudOmnissa', () => {
  let component: CloudOmnissa;
  let fixture: ComponentFixture<CloudOmnissa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudOmnissa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudOmnissa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
