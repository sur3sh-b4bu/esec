import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudAdobe } from './cloud-adobe';

describe('CloudAdobe', () => {
  let component: CloudAdobe;
  let fixture: ComponentFixture<CloudAdobe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudAdobe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudAdobe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
