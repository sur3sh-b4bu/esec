import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubFilterBar } from './sub-filter-bar';

describe('SubFilterBar', () => {
  let component: SubFilterBar;
  let fixture: ComponentFixture<SubFilterBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubFilterBar],
    }).compileComponents();

    fixture = TestBed.createComponent(SubFilterBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
