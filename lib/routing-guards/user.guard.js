"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/take");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var fromAuth = require("../reducers");
var UserGuard = /** @class */ (function () {
    function UserGuard(store) {
        this.store = store;
    }
    UserGuard.prototype.canActivate = function (route, state) {
        return this.store.select(fromAuth.getUser)
            .take(1)
            .map(function (user) { return user.Roles.includes('User'); });
    };
    UserGuard.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    UserGuard.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return UserGuard;
}());
exports.UserGuard = UserGuard;
//# sourceMappingURL=user.guard.js.map