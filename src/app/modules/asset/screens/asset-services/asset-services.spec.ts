import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetServices } from './asset-services';

describe('AssetServices', () => {
  let component: AssetServices;
  let fixture: ComponentFixture<AssetServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
