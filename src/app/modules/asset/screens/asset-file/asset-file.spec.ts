import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetFile } from './asset-file';

describe('AssetFile', () => {
  let component: AssetFile;
  let fixture: ComponentFixture<AssetFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetFile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetFile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
