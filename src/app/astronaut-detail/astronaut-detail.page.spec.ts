import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautDetailPage } from './astronaut-detail.page';

describe('AstronautDetailPage', () => {
  let component: AstronautDetailPage;
  let fixture: ComponentFixture<AstronautDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronautDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronautDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
