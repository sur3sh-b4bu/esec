import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTeamcenter } from './admin-teamcenter';

describe('AdminTeamcenter', () => {
  let component: AdminTeamcenter;
  let fixture: ComponentFixture<AdminTeamcenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTeamcenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTeamcenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
