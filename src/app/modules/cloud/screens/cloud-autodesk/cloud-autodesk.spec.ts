import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudAutodesk } from './cloud-autodesk';

describe('CloudAutodesk', () => {
  let component: CloudAutodesk;
  let fixture: ComponentFixture<CloudAutodesk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudAutodesk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudAutodesk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
