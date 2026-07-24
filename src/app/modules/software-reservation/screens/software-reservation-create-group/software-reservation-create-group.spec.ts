import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareReservationCreateGroup } from './software-reservation-create-group';

describe('SoftwareReservationCreateGroup', () => {
  let component: SoftwareReservationCreateGroup;
  let fixture: ComponentFixture<SoftwareReservationCreateGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareReservationCreateGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareReservationCreateGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
