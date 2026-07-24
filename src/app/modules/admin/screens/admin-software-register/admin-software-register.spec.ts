import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSoftwareRegister } from './admin-software-register';

describe('AdminSoftwareRegister', () => {
  let component: AdminSoftwareRegister;
  let fixture: ComponentFixture<AdminSoftwareRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSoftwareRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSoftwareRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
