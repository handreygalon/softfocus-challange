import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCommComponent } from './add-edit-comm.component';

describe('AddEditCommComponent', () => {
  let component: AddEditCommComponent;
  let fixture: ComponentFixture<AddEditCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
