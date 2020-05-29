import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleNavbarComponent } from './console-navbar.component';

describe('ConsoleNavbarComponent', () => {
  let component: ConsoleNavbarComponent;
  let fixture: ComponentFixture<ConsoleNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
