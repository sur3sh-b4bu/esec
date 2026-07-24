import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSoftwareRegister1 } from './admin-software-register-1';

describe('AdminSoftwareRegister1', () => {
  let component: AdminSoftwareRegister1;
  let fixture: ComponentFixture<AdminSoftwareRegister1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSoftwareRegister1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSoftwareRegister1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
