"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CaptchaComponent = /** @class */ (function () {
    function CaptchaComponent() {
        this.reset = new core_1.EventEmitter();
        this.captchaEntered = new core_1.EventEmitter();
    }
    CaptchaComponent.prototype.updateCaptchaValue = function () {
        this.captchaEntered.emit(this.captchaValue);
    };
    CaptchaComponent.prototype.setStyle = function () {
        return {
            "background-image": 'url("' + this.captcha$.CaptchaImageUrl + '");'
        };
    };
    CaptchaComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "auth-captcha",
                    template: "<div fxLayout='column'>   <div id='image-container' fxFlex='100' fxLayout='row' fxLayoutAlign='center center'>     <img id='captcha-image' fxFlex [src]=\"(captcha$ | async).CaptchaImageUrl\" fxLayoutAlign='center center' />     <a fxFlex=\"15\" tabindex=\"99\" mat-icon-button (click)=\"reset.emit()\">       <mat-icon class=\"mat-24\" aria-label=\"\u062F\u0631\u06CC\u0627\u0641\u062A \u062A\u0635\u0648\u06CC\u0631 \u0627\u0645\u0646\u06CC\u062A\u06CC \u062C\u062F\u06CC\u062F\">refresh</mat-icon>     </a>   </div>    <mat-input-container fxFlex='1 1 100%' fxFlexFill>     <input type=\"tel\" matInput placeholder=\"\u06A9\u062F \u0627\u0645\u0646\u06CC\u062A\u06CC\" (change)=\"updateCaptchaValue()\" [(ngModel)]=\"captchaValue\">   </mat-input-container> </div>",
                    styles: ["#captcha-image {     min-height: 40px;     max-width :226px;     display: block; } #image-container{     min-height: 45px; }"]
                },] },
    ];
    /** @nocollapse */
    CaptchaComponent.ctorParameters = function () { return []; };
    CaptchaComponent.propDecorators = {
        "captcha$": [{ type: core_1.Input, args: ["captcha",] },],
        "reset": [{ type: core_1.Output },],
        "captchaEntered": [{ type: core_1.Output },],
    };
    return CaptchaComponent;
}());
exports.CaptchaComponent = CaptchaComponent;
//# sourceMappingURL=captcha.component.js.map