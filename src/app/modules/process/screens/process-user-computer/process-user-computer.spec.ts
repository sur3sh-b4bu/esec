import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessUserComputer } from './process-user-computer';

describe('ProcessUserComputer', () => {
  let component: ProcessUserComputer;
  let fixture: ComponentFixture<ProcessUserComputer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessUserComputer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessUserComputer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
