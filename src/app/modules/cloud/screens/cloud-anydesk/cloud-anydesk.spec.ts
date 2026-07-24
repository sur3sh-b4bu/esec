import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudAnydesk } from './cloud-anydesk';

describe('CloudAnydesk', () => {
  let component: CloudAnydesk;
  let fixture: ComponentFixture<CloudAnydesk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudAnydesk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudAnydesk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
