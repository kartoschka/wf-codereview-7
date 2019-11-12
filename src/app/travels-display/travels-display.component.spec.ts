import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsDisplayComponent } from './travels-display.component';

describe('TravelsDisplayComponent', () => {
  let component: TravelsDisplayComponent;
  let fixture: ComponentFixture<TravelsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
