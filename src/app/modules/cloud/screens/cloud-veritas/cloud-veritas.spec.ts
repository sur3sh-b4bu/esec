import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudVeritas } from './cloud-veritas';

describe('CloudVeritas', () => {
  let component: CloudVeritas;
  let fixture: ComponentFixture<CloudVeritas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudVeritas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudVeritas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
