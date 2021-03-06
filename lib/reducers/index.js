"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var userReducer = require("./user.reducer");
var captchaReducer = require("./captcha.reducer");
exports.AuthenticationReducers = {
    userStatus: userReducer.UserReducer,
    captcha: captchaReducer.CaptchaReducer
};
//#region selectors
exports.selectAuthenticationState = store_1.createFeatureSelector("authentication");
exports.selectAuthState = store_1.createSelector(exports.selectAuthenticationState, function (state) { return state.userStatus; });
exports.getLoggedIn = store_1.createSelector(exports.selectAuthState, userReducer.getLoggedIn);
exports.getUser = store_1.createSelector(exports.selectAuthState, userReducer.getUser);
exports.selectCaptchaState = store_1.createSelector(exports.selectAuthenticationState, function (state) {
    return state.captcha;
});
exports.getCaptcha = store_1.createSelector(exports.selectCaptchaState, captchaReducer.getCaptcha);
//# sourceMappingURL=index.js.map