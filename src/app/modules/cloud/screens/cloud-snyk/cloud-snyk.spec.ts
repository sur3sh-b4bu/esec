import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudSnyk } from './cloud-snyk';

describe('CloudSnyk', () => {
  let component: CloudSnyk;
  let fixture: ComponentFixture<CloudSnyk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudSnyk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudSnyk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
