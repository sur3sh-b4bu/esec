import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudOpentextEcm } from './cloud-opentext-ecm';

describe('CloudOpentextEcm', () => {
  let component: CloudOpentextEcm;
  let fixture: ComponentFixture<CloudOpentextEcm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudOpentextEcm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudOpentextEcm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
