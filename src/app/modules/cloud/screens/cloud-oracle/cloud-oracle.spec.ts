import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudOracle } from './cloud-oracle';

describe('CloudOracle', () => {
  let component: CloudOracle;
  let fixture: ComponentFixture<CloudOracle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudOracle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudOracle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
