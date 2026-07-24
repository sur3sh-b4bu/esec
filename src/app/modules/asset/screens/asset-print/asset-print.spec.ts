import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetPrint } from './asset-print';

describe('AssetPrint', () => {
  let component: AssetPrint;
  let fixture: ComponentFixture<AssetPrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetPrint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetPrint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
