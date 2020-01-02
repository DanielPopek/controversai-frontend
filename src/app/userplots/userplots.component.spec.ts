import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserplotsComponent } from './userplots.component';

describe('UserplotsComponent', () => {
  let component: UserplotsComponent;
  let fixture: ComponentFixture<UserplotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserplotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserplotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
