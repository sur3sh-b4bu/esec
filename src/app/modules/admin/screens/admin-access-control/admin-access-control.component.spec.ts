import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAccessControl } from './admin-access-control.component'

describe('AdminAccessControl', () => {
  let component: AdminAccessControl;
  let fixture: ComponentFixture<AdminAccessControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccessControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccessControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
