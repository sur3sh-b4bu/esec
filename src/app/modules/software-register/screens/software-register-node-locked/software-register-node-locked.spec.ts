import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareRegisterNodeLocked } from './software-register-node-locked';

describe('SoftwareRegisterNodeLocked', () => {
  let component: SoftwareRegisterNodeLocked;
  let fixture: ComponentFixture<SoftwareRegisterNodeLocked>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareRegisterNodeLocked]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareRegisterNodeLocked);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
