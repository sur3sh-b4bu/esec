import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessUser } from './process-user';

describe('ProcessUser', () => {
  let component: ProcessUser;
  let fixture: ComponentFixture<ProcessUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
