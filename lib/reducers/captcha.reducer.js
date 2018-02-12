"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../actions");
const models_1 = require("../models");
exports.initialState = {
    captcha: new models_1.CaptchaModel()
};
function CaptchaReducer(state = exports.initialState, action) {
    switch (action.type) {
        case actions_1.NEW_CAPTCHA: {
            return state;
        }
        case actions_1.TOKEN_REQUESTED: {
            return exports.initialState;
        }
        case actions_1.TOKEN_RECEIVED:
            {
                return Object.assign({}, state, { captcha: Object.assign({}, state.captcha, { CaptchaImageUrl: 'http://wifi.shatel.ir/api/v1/captcha/image?token=' + action.payload.Token, Token: action.payload }) });
            }
        case actions_1.CAPTCHA_ENTERED:
            {
                return Object.assign({}, state, { captcha: Object.assign({}, state.captcha, { Captcha: action.payload }) });
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
exports.getCaptcha = (state) => state.captcha;
//# sourceMappingURL=captcha.reducer.js.map