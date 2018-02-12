import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
        selector: "auth-captcha",
        templateUrl: './captcha.component.html',
        styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent {
        @Input("captcha")
        captcha$ : any;

        captchaValue: string;

        @Output()
        reset = new EventEmitter();

        @Output()
        captchaEntered: EventEmitter<string> = new EventEmitter<string>();

        updateCaptchaValue() {
                this.captchaEntered.emit(this.captchaValue);
        }

        setStyle() {
                return {
                        "background-image": 'url("' + this.captcha$.CaptchaImageUrl + '");'
                }
        }

        constructor() { }

}