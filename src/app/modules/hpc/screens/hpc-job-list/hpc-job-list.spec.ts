import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HpcJobList } from './hpc-job-list';

describe('HpcJobList', () => {
  let component: HpcJobList;
  let fixture: ComponentFixture<HpcJobList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpcJobList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpcJobList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
