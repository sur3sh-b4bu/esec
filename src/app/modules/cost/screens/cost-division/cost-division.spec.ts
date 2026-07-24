import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostDivision } from './cost-division';

describe('CostDivision', () => {
  let component: CostDivision;
  let fixture: ComponentFixture<CostDivision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostDivision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostDivision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
