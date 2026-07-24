import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomLicenseDivisionHoursUsed } from './custom-license-division-hours-used';

describe('CustomLicenseDivisionHoursUsed', () => {
  let component: CustomLicenseDivisionHoursUsed;
  let fixture: ComponentFixture<CustomLicenseDivisionHoursUsed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLicenseDivisionHoursUsed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLicenseDivisionHoursUsed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
