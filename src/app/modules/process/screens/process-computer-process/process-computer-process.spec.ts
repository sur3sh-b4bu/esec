import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessComputerProcess } from './process-computer-process';

describe('ProcessComputerProcess', () => {
  let component: ProcessComputerProcess;
  let fixture: ComponentFixture<ProcessComputerProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessComputerProcess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessComputerProcess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
