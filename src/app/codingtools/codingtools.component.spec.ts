import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingtoolsComponent } from './codingtools.component';

describe('CodingtoolsComponent', () => {
  let component: CodingtoolsComponent;
  let fixture: ComponentFixture<CodingtoolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingtoolsComponent]
    });
    fixture = TestBed.createComponent(CodingtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
