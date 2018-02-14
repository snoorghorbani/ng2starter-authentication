"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SignInActionTypes;
(function (SignInActionTypes) {
    SignInActionTypes["SIGNIN"] = "[Auth] Signin";
    SignInActionTypes["SIGNOUT"] = "[Auth] Signout";
    SignInActionTypes["SIGNIN_SUCCEED"] = "[Auth] Signin Success";
    SignInActionTypes["SIGNIN_FAILURE"] = "[Auth] Signin Failure";
    SignInActionTypes["SIGNIN_REDIRECT"] = "[Auth] Signin Redirect";
})(SignInActionTypes = exports.SignInActionTypes || (exports.SignInActionTypes = {}));
var Signin = /** @class */ (function () {
    function Signin(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN;
    }
    return Signin;
}());
exports.Signin = Signin;
var SigninSecceed = /** @class */ (function () {
    function SigninSecceed(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_SUCCEED;
    }
    return SigninSecceed;
}());
exports.SigninSecceed = SigninSecceed;
var SigninFailed = /** @class */ (function () {
    function SigninFailed(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_FAILURE;
    }
    return SigninFailed;
}());
exports.SigninFailed = SigninFailed;
var SigninRedirect = /** @class */ (function () {
    function SigninRedirect() {
        this.type = SignInActionTypes.SIGNIN_REDIRECT;
    }
    return SigninRedirect;
}());
exports.SigninRedirect = SigninRedirect;
var SignoutAction = /** @class */ (function () {
    function SignoutAction() {
        this.type = SignInActionTypes.SIGNOUT;
    }
    return SignoutAction;
}());
exports.SignoutAction = SignoutAction;
//# sourceMappingURL=signin.actions.js.map