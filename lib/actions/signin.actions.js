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
class Signin {
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN;
    }
}
exports.Signin = Signin;
class SigninSecceed {
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_SUCCEED;
    }
}
exports.SigninSecceed = SigninSecceed;
class SigninFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_FAILURE;
    }
}
exports.SigninFailed = SigninFailed;
class SigninRedirect {
    constructor() {
        this.type = SignInActionTypes.SIGNIN_REDIRECT;
    }
}
exports.SigninRedirect = SigninRedirect;
class SignoutAction {
    constructor() {
        this.type = SignInActionTypes.SIGNOUT;
    }
}
exports.SignoutAction = SignoutAction;
//# sourceMappingURL=signin.actions.js.map