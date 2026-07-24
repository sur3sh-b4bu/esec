import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudQlik } from './cloud-qlik';

describe('CloudQlik', () => {
  let component: CloudQlik;
  let fixture: ComponentFixture<CloudQlik>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudQlik]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudQlik);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
