import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudQualys } from './cloud-qualys';

describe('CloudQualys', () => {
  let component: CloudQualys;
  let fixture: ComponentFixture<CloudQualys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudQualys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudQualys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
