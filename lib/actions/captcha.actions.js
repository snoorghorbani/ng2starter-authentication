"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NEW_CAPTCHA = '[captcha] new captcha';
exports.TOKEN_REQUESTED = '[captcha] token_requested';
exports.TOKEN_RECEIVED = '[captcha] token_received';
exports.CAPTCHA_IMAGE_REQUESTED = '[captcha] captcha_image_requested';
exports.CAPTCHA_IMAGE_LOADED = '[captcha] captcha_image_loaded';
exports.CAPTCHA_ENTERED = '[captcha] CAPTCHA_ENTERED';
exports.CLEAR_CAPTCHA = '[captcha] CLEAR_CAPTCHA';
class NewCaptcha {
    constructor() {
        this.type = exports.NEW_CAPTCHA;
    }
}
exports.NewCaptcha = NewCaptcha;
class TokenRequested {
    constructor() {
        this.type = exports.TOKEN_REQUESTED;
    }
}
exports.TokenRequested = TokenRequested;
class TokenReceived {
    constructor(payload) {
        this.payload = payload;
        this.type = exports.TOKEN_RECEIVED;
    }
}
exports.TokenReceived = TokenReceived;
class CaptchaImageRequested {
    constructor() {
        this.type = exports.CAPTCHA_IMAGE_REQUESTED;
    }
}
exports.CaptchaImageRequested = CaptchaImageRequested;
class CaptchaImageLoaded {
    constructor() {
        this.type = exports.CAPTCHA_IMAGE_LOADED;
    }
}
exports.CaptchaImageLoaded = CaptchaImageLoaded;
class CaptchaEntered {
    constructor(payload) {
        this.payload = payload;
        this.type = exports.CAPTCHA_ENTERED;
    }
}
exports.CaptchaEntered = CaptchaEntered;
class ClearCaptcha {
    constructor() {
        this.type = exports.CLEAR_CAPTCHA;
    }
}
exports.ClearCaptcha = ClearCaptcha;
//# sourceMappingURL=captcha.actions.js.map