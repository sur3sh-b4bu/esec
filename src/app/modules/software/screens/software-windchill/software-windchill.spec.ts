import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareWindchill } from './software-windchill';

describe('SoftwareWindchill', () => {
  let component: SoftwareWindchill;
  let fixture: ComponentFixture<SoftwareWindchill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareWindchill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareWindchill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
