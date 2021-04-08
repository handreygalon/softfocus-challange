import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCommComponent } from './show-comm.component';

describe('ShowCommComponent', () => {
  let component: ShowCommComponent;
  let fixture: ComponentFixture<ShowCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
