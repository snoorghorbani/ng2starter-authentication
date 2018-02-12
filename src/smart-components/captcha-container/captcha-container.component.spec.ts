import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaContainerComponent } from './captcha-container.component';

describe('CaptchaContainerComponent', () => {
  let component: CaptchaContainerComponent;
  let fixture: ComponentFixture<CaptchaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptchaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptchaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
