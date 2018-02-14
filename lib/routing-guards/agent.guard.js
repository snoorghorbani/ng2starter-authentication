"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/take");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var fromAuth = require("../reducers");
var AgentGuard = /** @class */ (function () {
    function AgentGuard(store) {
        this.store = store;
    }
    AgentGuard.prototype.canActivate = function (route, state) {
        return this.store.select(fromAuth.getUser).take(1).map(function (user) {
            var res = user.Roles.includes("Agent");
            // !res && this.store.dispatch(new SigninRedirect());
            return res;
        });
    };
    AgentGuard.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AgentGuard.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return AgentGuard;
}());
exports.AgentGuard = AgentGuard;
//# sourceMappingURL=agent.guard.js.map