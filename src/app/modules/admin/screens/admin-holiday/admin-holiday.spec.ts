import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminHoliday } from './admin-holiday';

describe('AdminHoliday', () => {
  let component: AdminHoliday;
  let fixture: ComponentFixture<AdminHoliday>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHoliday]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHoliday);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
