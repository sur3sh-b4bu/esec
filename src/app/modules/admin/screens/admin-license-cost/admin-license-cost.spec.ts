import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLicenseCost } from './admin-license-cost';

describe('AdminLicenseCost', () => {
  let component: AdminLicenseCost;
  let fixture: ComponentFixture<AdminLicenseCost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLicenseCost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLicenseCost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
