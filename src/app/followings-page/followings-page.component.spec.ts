import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingsPageComponent } from './followings-page.component';

describe('FollowingsPageComponent', () => {
  let component: FollowingsPageComponent;
  let fixture: ComponentFixture<FollowingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowingsPageComponent]
    });
    fixture = TestBed.createComponent(FollowingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
