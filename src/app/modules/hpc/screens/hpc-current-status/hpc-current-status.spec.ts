import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HpcCurrentStatus } from './hpc-current-status';

describe('HpcCurrentStatus', () => {
  let component: HpcCurrentStatus;
  let fixture: ComponentFixture<HpcCurrentStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpcCurrentStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpcCurrentStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
