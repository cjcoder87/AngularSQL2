import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentEntryComponent } from './agent-entry.component';

describe('AgentEntryComponent', () => {
  let component: AgentEntryComponent;
  let fixture: ComponentFixture<AgentEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
