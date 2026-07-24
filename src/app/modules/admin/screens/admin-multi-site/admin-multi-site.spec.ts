import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminMultiSite } from './admin-multi-site';

describe('AdminMultiSite', () => {
  let component: AdminMultiSite;
  let fixture: ComponentFixture<AdminMultiSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMultiSite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMultiSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
