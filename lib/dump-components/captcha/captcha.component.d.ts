import { EventEmitter } from '@angular/core';
export declare class CaptchaComponent {
    captcha$: any;
    captchaValue: string;
    reset: EventEmitter<{}>;
    captchaEntered: EventEmitter<string>;
    updateCaptchaValue(): void;
    setStyle(): {
        "background-image": string;
    };
    constructor();
}
