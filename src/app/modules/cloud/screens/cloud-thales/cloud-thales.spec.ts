import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudThales } from './cloud-thales';

describe('CloudThales', () => {
  let component: CloudThales;
  let fixture: ComponentFixture<CloudThales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudThales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudThales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
