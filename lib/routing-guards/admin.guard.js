"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/take");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var fromAuth = require("../reducers");
var AdminGuard = /** @class */ (function () {
    function AdminGuard(store) {
        this.store = store;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        return this.store.select(fromAuth.getUser)
            .take(1)
            .map(function (user) {
            var res = user.Roles.includes('Admin');
            // !res && this.store.dispatch(new SigninRedirect());
            return res;
        });
    };
    AdminGuard.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AdminGuard.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return AdminGuard;
}());
exports.AdminGuard = AdminGuard;
//# sourceMappingURL=admin.guard.js.map