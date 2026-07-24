import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetComputer } from './asset-computer';

describe('AssetComputer', () => {
  let component: AssetComputer;
  let fixture: ComponentFixture<AssetComputer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetComputer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetComputer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
