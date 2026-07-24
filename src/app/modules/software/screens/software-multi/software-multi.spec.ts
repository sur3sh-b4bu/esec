import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareMulti } from './software-multi';

describe('SoftwareMulti', () => {
  let component: SoftwareMulti;
  let fixture: ComponentFixture<SoftwareMulti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareMulti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareMulti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
