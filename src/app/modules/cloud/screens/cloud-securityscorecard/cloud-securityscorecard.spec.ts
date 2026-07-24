import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudSecurityscorecard } from './cloud-securityscorecard';

describe('CloudSecurityscorecard', () => {
  let component: CloudSecurityscorecard;
  let fixture: ComponentFixture<CloudSecurityscorecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudSecurityscorecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudSecurityscorecard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
