"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NEW_CAPTCHA = '[captcha] new captcha';
exports.TOKEN_REQUESTED = '[captcha] token_requested';
exports.TOKEN_RECEIVED = '[captcha] token_received';
exports.CAPTCHA_IMAGE_REQUESTED = '[captcha] captcha_image_requested';
exports.CAPTCHA_IMAGE_LOADED = '[captcha] captcha_image_loaded';
exports.CAPTCHA_ENTERED = '[captcha] CAPTCHA_ENTERED';
exports.CLEAR_CAPTCHA = '[captcha] CLEAR_CAPTCHA';
var NewCaptcha = /** @class */ (function () {
    function NewCaptcha() {
        this.type = exports.NEW_CAPTCHA;
    }
    return NewCaptcha;
}());
exports.NewCaptcha = NewCaptcha;
var TokenRequested = /** @class */ (function () {
    function TokenRequested() {
        this.type = exports.TOKEN_REQUESTED;
    }
    return TokenRequested;
}());
exports.TokenRequested = TokenRequested;
var TokenReceived = /** @class */ (function () {
    function TokenReceived(payload) {
        this.payload = payload;
        this.type = exports.TOKEN_RECEIVED;
    }
    return TokenReceived;
}());
exports.TokenReceived = TokenReceived;
var CaptchaImageRequested = /** @class */ (function () {
    function CaptchaImageRequested() {
        this.type = exports.CAPTCHA_IMAGE_REQUESTED;
    }
    return CaptchaImageRequested;
}());
exports.CaptchaImageRequested = CaptchaImageRequested;
var CaptchaImageLoaded = /** @class */ (function () {
    function CaptchaImageLoaded() {
        this.type = exports.CAPTCHA_IMAGE_LOADED;
    }
    return CaptchaImageLoaded;
}());
exports.CaptchaImageLoaded = CaptchaImageLoaded;
var CaptchaEntered = /** @class */ (function () {
    function CaptchaEntered(payload) {
        this.payload = payload;
        this.type = exports.CAPTCHA_ENTERED;
    }
    return CaptchaEntered;
}());
exports.CaptchaEntered = CaptchaEntered;
var ClearCaptcha = /** @class */ (function () {
    function ClearCaptcha() {
        this.type = exports.CLEAR_CAPTCHA;
    }
    return ClearCaptcha;
}());
exports.ClearCaptcha = ClearCaptcha;
//# sourceMappingURL=captcha.actions.js.map