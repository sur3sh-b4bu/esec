import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyReportServer } from './my-report-server';

describe('MyReportServer', () => {
  let component: MyReportServer;
  let fixture: ComponentFixture<MyReportServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReportServer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReportServer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
