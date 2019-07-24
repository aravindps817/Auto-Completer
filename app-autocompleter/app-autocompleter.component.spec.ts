/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppAutocompleterComponent } from './app-autocompleter.component';

describe('AppAutocompleterComponent', () => {
  let component: AppAutocompleterComponent;
  let fixture: ComponentFixture<AppAutocompleterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAutocompleterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAutocompleterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
