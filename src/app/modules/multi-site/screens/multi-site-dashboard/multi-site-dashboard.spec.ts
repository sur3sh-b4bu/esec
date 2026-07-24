import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSiteDashboard } from './multi-site-dashboard';

describe('MultiSiteDashboard', () => {
  let component: MultiSiteDashboard;
  let fixture: ComponentFixture<MultiSiteDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSiteDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSiteDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
