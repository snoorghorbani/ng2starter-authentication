"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var actions_1 = require("../../actions");
var featureReducer = require("../../reducers/index");
var CaptchaContainerComponent = /** @class */ (function () {
    function CaptchaContainerComponent(authStore) {
        this.authStore = authStore;
        this.captcha$ = this.authStore.select(featureReducer.getCaptcha);
    }
    CaptchaContainerComponent.prototype.reset = function () {
        this.authStore.dispatch(new actions_1.NewCaptcha());
    };
    CaptchaContainerComponent.prototype.setCaptchaValue = function (value) {
        this.authStore.dispatch(new actions_1.CaptchaEntered(value));
    };
    CaptchaContainerComponent.prototype.ngOnInit = function () {
        this.authStore.dispatch(new actions_1.NewCaptcha());
    };
    CaptchaContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'auth-captcha-container',
                    template: "<auth-captcha (reset)=\"reset()\" (captchaEntered)=\"setCaptchaValue($event)\" [captcha]=\"captcha$\"></auth-captcha>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    CaptchaContainerComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return CaptchaContainerComponent;
}());
exports.CaptchaContainerComponent = CaptchaContainerComponent;
//# sourceMappingURL=captcha-container.component.js.map