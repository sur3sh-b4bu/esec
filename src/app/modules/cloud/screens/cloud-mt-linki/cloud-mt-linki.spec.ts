import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudMtLinki } from './cloud-mt-linki';

describe('CloudMtLinki', () => {
  let component: CloudMtLinki;
  let fixture: ComponentFixture<CloudMtLinki>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudMtLinki]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudMtLinki);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
