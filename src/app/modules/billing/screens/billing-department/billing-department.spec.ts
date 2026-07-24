import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingDepartment } from './billing-department';

describe('BillingDepartment', () => {
  let component: BillingDepartment;
  let fixture: ComponentFixture<BillingDepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingDepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingDepartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
