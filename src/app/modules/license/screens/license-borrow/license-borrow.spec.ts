import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseBorrow } from './license-borrow';

describe('LicenseBorrow', () => {
  let component: LicenseBorrow;
  let fixture: ComponentFixture<LicenseBorrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseBorrow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseBorrow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
