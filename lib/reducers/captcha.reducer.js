"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../actions");
var models_1 = require("../models");
exports.initialState = {
    captcha: new models_1.CaptchaModel()
};
function CaptchaReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case actions_1.NEW_CAPTCHA: {
            return state;
        }
        case actions_1.TOKEN_REQUESTED: {
            return exports.initialState;
        }
        case actions_1.TOKEN_RECEIVED:
            {
                return __assign({}, state, { captcha: __assign({}, state.captcha, { CaptchaImageUrl: 'http://wifi.shatel.ir/api/v1/captcha/image?token=' + action.payload.Token, Token: action.payload }) });
            }
        case actions_1.CAPTCHA_ENTERED:
            {
                return __assign({}, state, { captcha: __assign({}, state.captcha, { Captcha: action.payload }) });
            }
        case actions_1.CLEAR_CAPTCHA:
            {
                return exports.initialState;
            }
        default: {
            return state;
        }
    }
}
exports.CaptchaReducer = CaptchaReducer;
exports.getCaptcha = function (state) { return state.captcha; };
//# sourceMappingURL=captcha.reducer.js.map