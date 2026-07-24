import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudForescout } from './cloud-forescout';

describe('CloudForescout', () => {
  let component: CloudForescout;
  let fixture: ComponentFixture<CloudForescout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudForescout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudForescout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
