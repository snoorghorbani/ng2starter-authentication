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
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
var effects_1 = require("@ngrx/effects");
var actions_1 = require("../actions");
var operators_1 = require("rxjs/operators");
var AuthenticationEffects = /** @class */ (function () {
    function AuthenticationEffects(actions$, router) {
        this.actions$ = actions$;
        this.router = router;
        this.dispachProgressingStarted$ = this.actions$
            .ofType(actions_1.SignInActionTypes.SIGNIN)
            .pipe(operators_1.map(function () { return new actions_1.ProgressingStarted(); }));
        this.dispachProgressingFinished$ = this.actions$
            .ofType(actions_1.SignInActionTypes.SIGNIN_FAILURE, actions_1.SignInActionTypes.SIGNIN_SUCCEED)
            .pipe(operators_1.map(function () { return new actions_1.ProgressingFinished(); }));
    }
    AuthenticationEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AuthenticationEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AuthenticationEffects.prototype, "dispachProgressingStarted$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AuthenticationEffects.prototype, "dispachProgressingFinished$", void 0);
    return AuthenticationEffects;
}());
exports.AuthenticationEffects = AuthenticationEffects;
//# sourceMappingURL=authentication.effects.js.map