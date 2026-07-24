import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudAutomationAnywhere } from './cloud-automation-anywhere';

describe('CloudAutomationAnywhere', () => {
  let component: CloudAutomationAnywhere;
  let fixture: ComponentFixture<CloudAutomationAnywhere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudAutomationAnywhere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudAutomationAnywhere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
