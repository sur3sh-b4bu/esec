import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostDepartment } from './cost-department';

describe('CostDepartment', () => {
  let component: CostDepartment;
  let fixture: ComponentFixture<CostDepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostDepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostDepartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
