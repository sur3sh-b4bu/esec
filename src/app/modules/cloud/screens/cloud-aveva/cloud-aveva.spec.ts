import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudAveva } from './cloud-aveva';

describe('CloudAveva', () => {
  let component: CloudAveva;
  let fixture: ComponentFixture<CloudAveva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudAveva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudAveva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
