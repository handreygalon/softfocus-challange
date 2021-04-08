import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCultivationComponent } from './add-edit-cultivation.component';

describe('AddEditCultivationComponent', () => {
  let component: AddEditCultivationComponent;
  let fixture: ComponentFixture<AddEditCultivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCultivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCultivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
