import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminGdpr } from './admin-gdpr';

describe('AdminGdpr', () => {
  let component: AdminGdpr;
  let fixture: ComponentFixture<AdminGdpr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGdpr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGdpr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
