import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRow } from './tab-row';

describe('TabRow', () => {
  let component: TabRow;
  let fixture: ComponentFixture<TabRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabRow],
    }).compileComponents();

    fixture = TestBed.createComponent(TabRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
