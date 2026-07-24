import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomLicenseSoftware } from './custom-license-software';

describe('CustomLicenseSoftware', () => {
  let component: CustomLicenseSoftware;
  let fixture: ComponentFixture<CustomLicenseSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLicenseSoftware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLicenseSoftware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
