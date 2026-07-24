import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingDivision } from './billing-division';

describe('BillingDivision', () => {
  let component: BillingDivision;
  let fixture: ComponentFixture<BillingDivision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingDivision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingDivision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
