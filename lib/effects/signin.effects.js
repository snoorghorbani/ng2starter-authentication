"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/empty");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var signin_actions_1 = require("../actions/signin.actions");
var services_1 = require("../services");
var actions_1 = require("../actions");
var SigninEffects = /** @class */ (function () {
    function SigninEffects(actions$, router, signinService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.signinService = signinService;
        this.preSignUpStart$ = this.actions$
            .ofType(signin_actions_1.SignInActionTypes.SIGNIN)
            .pipe(operators_1.switchMap(function (action) { return _this.signinService.signin(action.payload); }), operators_1.map(function (user) { return new signin_actions_1.SigninSecceed(user); }), operators_1.catchError(function (error) { return Observable_1.Observable.of(new signin_actions_1.SigninFailed(error)); }));
        this.SigninSucceed$ = this.actions$
            .ofType(signin_actions_1.SignInActionTypes.SIGNIN_SUCCEED)
            .pipe(operators_1.tap(function (data) { return _this.router.navigate(["/"]); }));
        this.AfterSigninFiled$ = this.actions$.ofType(signin_actions_1.SignInActionTypes.SIGNIN_FAILURE).map(function () { return new actions_1.NewCaptcha(); });
        this.redirectToLoginPage$ = this.actions$
            .ofType(signin_actions_1.SignInActionTypes.SIGNIN_REDIRECT, signin_actions_1.SignInActionTypes.SIGNOUT)
            .pipe(operators_1.tap(function (authed) { return _this.router.navigate(["auth/signin"]); }));
    }
    SigninEffects.decorators = [
        { type: core_1.Injectable },
    ];
    // TODO:
    // @Effect({ dispatch: false })
    // signout$ = this.actions$
    // 	.ofType(SignInActionTypes.SIGNOUT)
    // 	.map((data) => this.signinService.signout().subscribe((response) => null));
    /** @nocollapse */
    SigninEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.SigninService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "preSignUpStart$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "SigninSucceed$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "AfterSigninFiled$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "redirectToLoginPage$", void 0);
    return SigninEffects;
}());
exports.SigninEffects = SigninEffects;
//# sourceMappingURL=signin.effects.js.map