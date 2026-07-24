import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudRedHat } from './cloud-red-hat';

describe('CloudRedHat', () => {
  let component: CloudRedHat;
  let fixture: ComponentFixture<CloudRedHat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudRedHat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudRedHat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
