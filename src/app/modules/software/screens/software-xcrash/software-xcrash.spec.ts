import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareXcrash } from './software-xcrash';

describe('SoftwareXcrash', () => {
  let component: SoftwareXcrash;
  let fixture: ComponentFixture<SoftwareXcrash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareXcrash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareXcrash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
