import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareRegisterSoftwareRegister } from './software-register-software-register';

describe('SoftwareRegisterSoftwareRegister', () => {
  let component: SoftwareRegisterSoftwareRegister;
  let fixture: ComponentFixture<SoftwareRegisterSoftwareRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareRegisterSoftwareRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareRegisterSoftwareRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
