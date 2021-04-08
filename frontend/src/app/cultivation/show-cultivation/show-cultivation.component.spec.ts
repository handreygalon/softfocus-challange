import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCultivationComponent } from './show-cultivation.component';

describe('ShowCultivationComponent', () => {
  let component: ShowCultivationComponent;
  let fixture: ComponentFixture<ShowCultivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCultivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCultivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
