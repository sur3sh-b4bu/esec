import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudSerena } from './cloud-serena';

describe('CloudSerena', () => {
  let component: CloudSerena;
  let fixture: ComponentFixture<CloudSerena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudSerena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudSerena);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
