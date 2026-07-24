import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudMulesoft } from './cloud-mulesoft';

describe('CloudMulesoft', () => {
  let component: CloudMulesoft;
  let fixture: ComponentFixture<CloudMulesoft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudMulesoft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudMulesoft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
