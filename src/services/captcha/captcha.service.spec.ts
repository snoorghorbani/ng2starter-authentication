import { TestBed, inject } from '@angular/core/testing';

import { CaptchaService } from '.';

describe('CaptchaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
            providers: [CaptchaService]
    });
  });

  it('should ...', inject([CaptchaService], (service: CaptchaService) => {
    expect(service).toBeTruthy();
  }));
});