import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareReservationMyRequest } from './software-reservation-my-request';

describe('SoftwareReservationMyRequest', () => {
  let component: SoftwareReservationMyRequest;
  let fixture: ComponentFixture<SoftwareReservationMyRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareReservationMyRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareReservationMyRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
