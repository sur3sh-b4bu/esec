import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseDivision } from './license-division';

describe('LicenseDivision', () => {
  let component: LicenseDivision;
  let fixture: ComponentFixture<LicenseDivision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseDivision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseDivision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
