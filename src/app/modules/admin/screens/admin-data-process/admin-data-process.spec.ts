import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDataProcess } from './admin-data-process';

describe('AdminDataProcess', () => {
  let component: AdminDataProcess;
  let fixture: ComponentFixture<AdminDataProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDataProcess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDataProcess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
