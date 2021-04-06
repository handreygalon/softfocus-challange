import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommunicationComponent } from './new-communication.component';

describe('NewCommunicationComponent', () => {
  let component: NewCommunicationComponent;
  let fixture: ComponentFixture<NewCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
