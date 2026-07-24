import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudMicrosoft } from './cloud-microsoft';

describe('CloudMicrosoft', () => {
  let component: CloudMicrosoft;
  let fixture: ComponentFixture<CloudMicrosoft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudMicrosoft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudMicrosoft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
