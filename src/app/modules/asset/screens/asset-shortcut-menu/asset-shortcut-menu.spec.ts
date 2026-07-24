import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetShortcutMenu } from './asset-shortcut-menu';

describe('AssetShortcutMenu', () => {
  let component: AssetShortcutMenu;
  let fixture: ComponentFixture<AssetShortcutMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetShortcutMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetShortcutMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
