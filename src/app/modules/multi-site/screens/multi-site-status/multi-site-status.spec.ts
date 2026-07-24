import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSiteStatus } from './multi-site-status';

describe('MultiSiteStatus', () => {
  let component: MultiSiteStatus;
  let fixture: ComponentFixture<MultiSiteStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSiteStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSiteStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
