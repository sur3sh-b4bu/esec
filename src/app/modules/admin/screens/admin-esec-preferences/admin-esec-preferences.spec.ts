import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEsecPreferences } from './admin-esec-preferences';

describe('AdminEsecPreferences', () => {
  let component: AdminEsecPreferences;
  let fixture: ComponentFixture<AdminEsecPreferences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEsecPreferences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEsecPreferences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
