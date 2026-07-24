import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSoftwareInventory } from './admin-software-inventory';

describe('AdminSoftwareInventory', () => {
  let component: AdminSoftwareInventory;
  let fixture: ComponentFixture<AdminSoftwareInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSoftwareInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSoftwareInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
