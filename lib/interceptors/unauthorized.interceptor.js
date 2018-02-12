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
require("rxjs/add/operator/do");
const Observable_1 = require("rxjs/Observable");
const http_1 = require("@angular/common/http");
const http_2 = require("@angular/common/http");
const store_1 = require("@ngrx/store");
const actions_1 = require("../actions");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let UnauthorizedInterceptor = class UnauthorizedInterceptor {
    constructor(router, store // private signinService: SigninService
    ) {
        this.router = router;
        this.store = store; // private signinService: SigninService
    }
    intercept(request, next) {
        return next
            .handle(request)
            .map((event) => {
            if (event instanceof http_1.HttpResponse)
                return event;
        })
            .catch((err) => {
            if (!(err instanceof http_2.HttpErrorResponse))
                return;
            if (err.status != 401)
                return;
            if (err.url.includes("logout"))
                return;
            this.store.dispatch(new actions_1.SignoutAction());
            return Observable_1.Observable.throw("Unauthorized");
        });
    }
};
UnauthorizedInterceptor = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        store_1.Store])
], UnauthorizedInterceptor);
exports.UnauthorizedInterceptor = UnauthorizedInterceptor;
//# sourceMappingURL=unauthorized.interceptor.js.map