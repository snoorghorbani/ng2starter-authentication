"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var actions_1 = require("../../actions");
var services_1 = require("../../services");
var SigninContainerComponent = /** @class */ (function () {
    function SigninContainerComponent(configurationService, store) {
        this.configurationService = configurationService;
        this.store = store;
        this.formId$ = this.configurationService.config$.map(function (config) { return config.forms.signIn; });
    }
    SigninContainerComponent.prototype.signIn = function (formValue) {
        this.store.dispatch(new actions_1.Signin(formValue));
    };
    SigninContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "\n        <auth-signin \n                [formId]='(formId$ | async)'\n                (signedin)=\"signIn($event)\"\n        ></auth-signin>\n  "
                },] },
    ];
    /** @nocollapse */
    SigninContainerComponent.ctorParameters = function () { return [
        { type: services_1.AuthenticationConfigurationService, },
        { type: store_1.Store, },
    ]; };
    return SigninContainerComponent;
}());
exports.SigninContainerComponent = SigninContainerComponent;
//# sourceMappingURL=signin-container.component.js.map