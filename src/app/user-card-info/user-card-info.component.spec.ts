import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardInfoComponent } from './user-card-info.component';

describe('UserCardInfoComponent', () => {
  let component: UserCardInfoComponent;
  let fixture: ComponentFixture<UserCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
