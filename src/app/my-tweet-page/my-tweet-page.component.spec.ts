import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTweetPageComponent } from './my-tweet-page.component';

describe('MyTweetPageComponent', () => {
  let component: MyTweetPageComponent;
  let fixture: ComponentFixture<MyTweetPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTweetPageComponent]
    });
    fixture = TestBed.createComponent(MyTweetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
