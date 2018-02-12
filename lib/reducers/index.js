"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("@ngrx/store");
const userReducer = require("./user.reducer");
const captchaReducer = require("./captcha.reducer");
exports.AuthenticationReducers = {
    userStatus: userReducer.UserReducer,
    captcha: captchaReducer.CaptchaReducer,
};
//#region selectors
exports.selectAuthenticationState = store_1.createFeatureSelector("authentication");
exports.selectAuthState = store_1.createSelector(exports.selectAuthenticationState, (state) => state.userStatus);
exports.getLoggedIn = store_1.createSelector(exports.selectAuthState, userReducer.getLoggedIn);
exports.getUser = store_1.createSelector(exports.selectAuthState, userReducer.getUser);
exports.selectCaptchaState = store_1.createSelector(exports.selectAuthenticationState, (state) => { return state.captcha; });
exports.getCaptcha = store_1.createSelector(exports.selectCaptchaState, captchaReducer.getCaptcha);
//# sourceMappingURL=index.js.map