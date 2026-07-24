import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseDenial } from './license-denial';

describe('LicenseDenial', () => {
  let component: LicenseDenial;
  let fixture: ComponentFixture<LicenseDenial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseDenial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseDenial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
