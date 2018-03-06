"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var FeatureReducer = require("../../reducers/index");
var actions_1 = require("../../actions");
var AuthenticationContainerComponent = /** @class */ (function () {
    function AuthenticationContainerComponent(store) {
        this.store = store;
        this.captcha$ = this.store.select(FeatureReducer.getCaptcha);
    }
    AuthenticationContainerComponent.prototype.newCaptcha = function () {
        this.store.dispatch(new actions_1.NewCaptcha());
    };
    AuthenticationContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "\n          <router-outlet></router-outlet>\n        "
                },] },
    ];
    /** @nocollapse */
    AuthenticationContainerComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return AuthenticationContainerComponent;
}());
exports.AuthenticationContainerComponent = AuthenticationContainerComponent;
//# sourceMappingURL=authentication-container.component.js.map