import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudBentleyReal } from './cloud-bentley-real';

describe('CloudBentleyReal', () => {
  let component: CloudBentleyReal;
  let fixture: ComponentFixture<CloudBentleyReal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudBentleyReal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudBentleyReal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
