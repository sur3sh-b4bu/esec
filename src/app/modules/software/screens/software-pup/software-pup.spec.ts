import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwarePup } from './software-pup';

describe('SoftwarePup', () => {
  let component: SoftwarePup;
  let fixture: ComponentFixture<SoftwarePup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwarePup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwarePup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
