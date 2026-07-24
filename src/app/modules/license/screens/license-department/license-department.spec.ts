import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseDepartment } from './license-department';

describe('LicenseDepartment', () => {
  let component: LicenseDepartment;
  let fixture: ComponentFixture<LicenseDepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseDepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseDepartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
