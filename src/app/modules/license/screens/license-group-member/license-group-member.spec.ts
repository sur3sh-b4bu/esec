import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseGroupMember } from './license-group-member';

describe('LicenseGroupMember', () => {
  let component: LicenseGroupMember;
  let fixture: ComponentFixture<LicenseGroupMember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseGroupMember]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseGroupMember);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
