import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareVcs } from './software-vcs';

describe('SoftwareVcs', () => {
  let component: SoftwareVcs;
  let fixture: ComponentFixture<SoftwareVcs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareVcs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareVcs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
