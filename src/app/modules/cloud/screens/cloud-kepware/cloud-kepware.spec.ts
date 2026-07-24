import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudKepware } from './cloud-kepware';

describe('CloudKepware', () => {
  let component: CloudKepware;
  let fixture: ComponentFixture<CloudKepware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudKepware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudKepware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
