import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessUserProcess } from './process-user-process';

describe('ProcessUserProcess', () => {
  let component: ProcessUserProcess;
  let fixture: ComponentFixture<ProcessUserProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessUserProcess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessUserProcess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
