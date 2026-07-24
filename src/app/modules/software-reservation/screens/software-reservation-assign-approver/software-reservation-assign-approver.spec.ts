import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareReservationAssignApprover } from './software-reservation-assign-approver';

describe('SoftwareReservationAssignApprover', () => {
  let component: SoftwareReservationAssignApprover;
  let fixture: ComponentFixture<SoftwareReservationAssignApprover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareReservationAssignApprover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareReservationAssignApprover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
