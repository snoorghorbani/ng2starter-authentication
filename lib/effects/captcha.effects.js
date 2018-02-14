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
require("rxjs/add/operator/switchMap");
require("rxjs/add/observable/empty");
var effects_1 = require("@ngrx/effects");
var actions_1 = require("../actions");
var services_1 = require("../services");
var CaptchaEffects = /** @class */ (function () {
    function CaptchaEffects(actions$, router, captchaService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.captchaService = captchaService;
        this.login$ = this.actions$
            .ofType(actions_1.NEW_CAPTCHA)
            .map(function () { return new actions_1.TokenRequested(); });
        this.tokenRequest$ = this.actions$
            .ofType(actions_1.TOKEN_REQUESTED)
            .switchMap(function () {
            return _this.captchaService.getToken()
                .map(function (token) { return new actions_1.TokenReceived(token); })
                .catch(function (err) {
                return Observable_1.Observable.empty();
            });
        });
    }
    CaptchaEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    CaptchaEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.CaptchaService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], CaptchaEffects.prototype, "login$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], CaptchaEffects.prototype, "tokenRequest$", void 0);
    return CaptchaEffects;
}());
exports.CaptchaEffects = CaptchaEffects;
//# sourceMappingURL=captcha.effects.js.map