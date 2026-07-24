import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSoftware } from './admin-software';

describe('AdminSoftware', () => {
  let component: AdminSoftware;
  let fixture: ComponentFixture<AdminSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSoftware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSoftware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
