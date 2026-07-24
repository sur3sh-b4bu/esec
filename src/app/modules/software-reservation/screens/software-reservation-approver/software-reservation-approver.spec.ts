import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareReservationApprover } from './software-reservation-approver';

describe('SoftwareReservationApprover', () => {
  let component: SoftwareReservationApprover;
  let fixture: ComponentFixture<SoftwareReservationApprover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareReservationApprover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareReservationApprover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
