import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareActcad } from './software-actcad';

describe('SoftwareActcad', () => {
  let component: SoftwareActcad;
  let fixture: ComponentFixture<SoftwareActcad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareActcad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareActcad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
