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
// ./effects/auth.ts
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/switchMap");
require("rxjs/add/observable/empty");
const effects_1 = require("@ngrx/effects");
const actions_1 = require("../actions");
//import {  } from '../reducers';
const services_1 = require("../services");
let CaptchaEffects = class CaptchaEffects {
    constructor(actions$, router, captchaService) {
        this.actions$ = actions$;
        this.router = router;
        this.captchaService = captchaService;
        this.login$ = this.actions$
            .ofType(actions_1.NEW_CAPTCHA)
            .map(() => new actions_1.TokenRequested());
        this.tokenRequest$ = this.actions$
            .ofType(actions_1.TOKEN_REQUESTED)
            .switchMap(() => this.captchaService.getToken()
            .map(token => new actions_1.TokenReceived(token))
            .catch(err => {
            return Observable_1.Observable.empty();
        }));
    }
};
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], CaptchaEffects.prototype, "login$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], CaptchaEffects.prototype, "tokenRequest$", void 0);
CaptchaEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [effects_1.Actions,
        router_1.Router,
        services_1.CaptchaService])
], CaptchaEffects);
exports.CaptchaEffects = CaptchaEffects;
//# sourceMappingURL=captcha.effects.js.map