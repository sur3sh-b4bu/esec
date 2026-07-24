import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HpcServerUsage } from './hpc-server-usage';

describe('HpcServerUsage', () => {
  let component: HpcServerUsage;
  let fixture: ComponentFixture<HpcServerUsage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpcServerUsage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpcServerUsage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
