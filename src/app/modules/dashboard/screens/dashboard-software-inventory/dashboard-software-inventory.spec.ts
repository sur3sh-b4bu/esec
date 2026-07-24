import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardSoftwareInventory } from './dashboard-software-inventory';

describe('DashboardSoftwareInventory', () => {
  let component: DashboardSoftwareInventory;
  let fixture: ComponentFixture<DashboardSoftwareInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSoftwareInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSoftwareInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
