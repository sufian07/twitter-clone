import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailsPageComponent } from './users-details-page.component';

describe('UsersDetailsPageComponent', () => {
  let component: UsersDetailsPageComponent;
  let fixture: ComponentFixture<UsersDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersDetailsPageComponent]
    });
    fixture = TestBed.createComponent(UsersDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
