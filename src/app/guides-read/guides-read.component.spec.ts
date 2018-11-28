import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesReadComponent } from './guides-read.component';

describe('GuidesReadComponent', () => {
  let component: GuidesReadComponent;
  let fixture: ComponentFixture<GuidesReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidesReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
