import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCloud } from './admin-cloud';

describe('AdminCloud', () => {
  let component: AdminCloud;
  let fixture: ComponentFixture<AdminCloud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCloud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCloud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
