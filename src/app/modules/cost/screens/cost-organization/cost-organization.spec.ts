import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostOrganization } from './cost-organization';

describe('CostOrganization', () => {
  let component: CostOrganization;
  let fixture: ComponentFixture<CostOrganization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostOrganization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostOrganization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
