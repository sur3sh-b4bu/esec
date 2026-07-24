import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudConfluence } from './cloud-confluence';

describe('CloudConfluence', () => {
  let component: CloudConfluence;
  let fixture: ComponentFixture<CloudConfluence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudConfluence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudConfluence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
