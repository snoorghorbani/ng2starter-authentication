"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/take");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var fromAuth = require("../reducers");
var SigninGuard = /** @class */ (function () {
    function SigninGuard(store) {
        this.store = store;
    }
    SigninGuard.prototype.canActivate = function (route, state) {
        return this.store.select(fromAuth.getLoggedIn)
            .take(1)
            .map(function (authed) { return !authed; });
    };
    SigninGuard.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    SigninGuard.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return SigninGuard;
}());
exports.SigninGuard = SigninGuard;
//# sourceMappingURL=signin.guard.js.map