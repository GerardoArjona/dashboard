import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesCreateComponent } from './guides-create.component';

describe('GuidesCreateComponent', () => {
  let component: GuidesCreateComponent;
  let fixture: ComponentFixture<GuidesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
