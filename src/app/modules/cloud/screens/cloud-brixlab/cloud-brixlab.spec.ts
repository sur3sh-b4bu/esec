import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudBrixlab } from './cloud-brixlab';

describe('CloudBrixlab', () => {
  let component: CloudBrixlab;
  let fixture: ComponentFixture<CloudBrixlab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudBrixlab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudBrixlab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
