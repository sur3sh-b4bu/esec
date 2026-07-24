import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSoftwareCompliance } from './admin-software-compliance';

describe('AdminSoftwareCompliance', () => {
  let component: AdminSoftwareCompliance;
  let fixture: ComponentFixture<AdminSoftwareCompliance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSoftwareCompliance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSoftwareCompliance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
