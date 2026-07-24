import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessId } from './process-id';

describe('ProcessId', () => {
  let component: ProcessId;
  let fixture: ComponentFixture<ProcessId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessId]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessId);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
