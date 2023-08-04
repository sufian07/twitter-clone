import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfollowButtonComponent } from './unfollow-button.component';

describe('UnfollowButtonComponent', () => {
  let component: UnfollowButtonComponent;
  let fixture: ComponentFixture<UnfollowButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnfollowButtonComponent]
    });
    fixture = TestBed.createComponent(UnfollowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
