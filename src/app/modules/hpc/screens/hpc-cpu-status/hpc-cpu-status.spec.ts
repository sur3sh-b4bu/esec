import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HpcCpuStatus } from './hpc-cpu-status';

describe('HpcCpuStatus', () => {
  let component: HpcCpuStatus;
  let fixture: ComponentFixture<HpcCpuStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpcCpuStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpcCpuStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
