import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessUserProcessComputer } from './process-user-process-computer';

describe('ProcessUserProcessComputer', () => {
  let component: ProcessUserProcessComputer;
  let fixture: ComponentFixture<ProcessUserProcessComputer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessUserProcessComputer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessUserProcessComputer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
