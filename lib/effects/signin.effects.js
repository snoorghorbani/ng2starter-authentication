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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/empty");
const effects_1 = require("@ngrx/effects");
const signin_actions_1 = require("../actions/signin.actions");
// import * as AuthActions from '../actions';
//import {  } from '../reducers';
const services_1 = require("../services");
const actions_1 = require("../actions");
let SigninEffects = class SigninEffects {
    constructor(actions$, router, signinService) {
        this.actions$ = actions$;
        this.router = router;
        this.signinService = signinService;
        this.preSignUpStart$ = this.actions$
            .ofType(signin_actions_1.SignInActionTypes.SIGNIN)
            .map(effects_1.toPayload)
            .switchMap((payload) => this.signinService
            .signin(payload)
            .map((user) => new signin_actions_1.SigninSecceed(user))
            .catch((error) => Observable_1.Observable.of(new signin_actions_1.SigninFailed(error))));
        this.SigninSucceed$ = this.actions$
            .ofType(signin_actions_1.SignInActionTypes.SIGNIN_SUCCEED)
            .map(effects_1.toPayload)
            .switchMap((data) => {
            this.router.navigate([data.destinationRoute || "/"]);
            return Observable_1.Observable.empty();
        });
        this.AfterSigninFiled$ = this.actions$.ofType(signin_actions_1.SignInActionTypes.SIGNIN_FAILURE).map(() => new actions_1.NewCaptcha());
        this.redirectToLoginPage$ = this.actions$
            .ofType(signin_actions_1.SignInActionTypes.SIGNIN_REDIRECT, signin_actions_1.SignInActionTypes.SIGNOUT)
            .do((authed) => {
            this.router.navigate(["auth/signin"]);
        });
    }
};
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], SigninEffects.prototype, "preSignUpStart$", void 0);
__decorate([
    effects_1.Effect(),
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
SigninEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [effects_1.Actions, router_1.Router, services_1.SigninService])
], SigninEffects);
exports.SigninEffects = SigninEffects;
//# sourceMappingURL=signin.effects.js.map