import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplianceCommunicationPort } from './compliance-communication-port';

describe('ComplianceCommunicationPort', () => {
  let component: ComplianceCommunicationPort;
  let fixture: ComponentFixture<ComplianceCommunicationPort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplianceCommunicationPort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceCommunicationPort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
