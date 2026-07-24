import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessSoftwareUsage } from './process-software-usage';

describe('ProcessSoftwareUsage', () => {
  let component: ProcessSoftwareUsage;
  let fixture: ComponentFixture<ProcessSoftwareUsage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessSoftwareUsage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessSoftwareUsage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
