import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareCosin } from './software-cosin';

describe('SoftwareCosin', () => {
  let component: SoftwareCosin;
  let fixture: ComponentFixture<SoftwareCosin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareCosin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareCosin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
