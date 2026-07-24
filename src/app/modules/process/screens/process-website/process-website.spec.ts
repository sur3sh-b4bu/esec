import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessWebsite } from './process-website';

describe('ProcessWebsite', () => {
  let component: ProcessWebsite;
  let fixture: ComponentFixture<ProcessWebsite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessWebsite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessWebsite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
