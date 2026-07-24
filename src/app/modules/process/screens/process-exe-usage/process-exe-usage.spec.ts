import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessExeUsage } from './process-exe-usage';

describe('ProcessExeUsage', () => {
  let component: ProcessExeUsage;
  let fixture: ComponentFixture<ProcessExeUsage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessExeUsage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessExeUsage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
