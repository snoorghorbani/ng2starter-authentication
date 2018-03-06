"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var FeatureReducer = require("../../reducers");
var actions_1 = require("../../actions");
var services_1 = require("../../services");
var SigninContainerComponent = /** @class */ (function () {
    function SigninContainerComponent(configurationService, store) {
        this.configurationService = configurationService;
        this.store = store;
        this.formId$ = this.configurationService.config$.map(function (config) { return config.forms.signIn; });
        this.captcha$ = this.store.select(FeatureReducer.getCaptcha);
    }
    SigninContainerComponent.prototype.ngOnInit = function () {
        this.captcha$
            .subscribe(function (data) {
            if (!(data.Captcha && data.Token))
                return;
            // this.form.patchValue({ Captcha: data.Captcha });
            // this.form.patchValue({ Token: data.Token.Token });
        });
    };
    SigninContainerComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new actions_1.ClearCaptcha());
    };
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