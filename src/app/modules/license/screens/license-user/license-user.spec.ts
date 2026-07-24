import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseUser } from './license-user';

describe('LicenseUser', () => {
  let component: LicenseUser;
  let fixture: ComponentFixture<LicenseUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
