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
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
const effects_1 = require("@ngrx/effects");
const actions_1 = require("../actions");
let AuthenticationEffects = class AuthenticationEffects {
    constructor(actions$, router) {
        this.actions$ = actions$;
        this.router = router;
        this.dispachProgressingStarted$ = this.actions$
            .ofType(actions_1.SignInActionTypes.SIGNIN)
            .map(() => new actions_1.ProgressingStarted());
        this.dispachProgressingFinished$ = this.actions$
            .ofType(actions_1.SignInActionTypes.SIGNIN_FAILURE, actions_1.SignInActionTypes.SIGNIN_SUCCEED)
            .map(() => new actions_1.ProgressingFinished());
    }
};
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "dispachProgressingStarted$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "dispachProgressingFinished$", void 0);
AuthenticationEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [effects_1.Actions,
        router_1.Router])
], AuthenticationEffects);
exports.AuthenticationEffects = AuthenticationEffects;
//# sourceMappingURL=authentication.effects.js.map