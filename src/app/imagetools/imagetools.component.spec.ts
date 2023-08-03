import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagetoolsComponent } from './imagetools.component';

describe('ImagetoolsComponent', () => {
  let component: ImagetoolsComponent;
  let fixture: ComponentFixture<ImagetoolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagetoolsComponent]
    });
    fixture = TestBed.createComponent(ImagetoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
