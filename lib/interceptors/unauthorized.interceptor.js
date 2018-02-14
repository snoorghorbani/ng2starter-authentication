"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/do");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/common/http");
var store_1 = require("@ngrx/store");
var actions_1 = require("../actions");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var UnauthorizedInterceptor = /** @class */ (function () {
    function UnauthorizedInterceptor(router, store // private signinService: SigninService
    ) {
        this.router = router;
        this.store = store; // private signinService: SigninService
    }
    UnauthorizedInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next
            .handle(request)
            .map(function (event) {
            if (event instanceof http_1.HttpResponse)
                return event;
        })
            .catch(function (err) {
            if (!(err instanceof http_2.HttpErrorResponse))
                return;
            if (err.status != 401)
                return;
            if (err.url.includes("logout"))
                return;
            _this.store.dispatch(new actions_1.SignoutAction());
            return Observable_1.Observable.throw("Unauthorized");
        });
    };
    UnauthorizedInterceptor.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    UnauthorizedInterceptor.ctorParameters = function () { return [
        { type: router_1.Router, },
        { type: store_1.Store, },
    ]; };
    return UnauthorizedInterceptor;
}());
exports.UnauthorizedInterceptor = UnauthorizedInterceptor;
//# sourceMappingURL=unauthorized.interceptor.js.map