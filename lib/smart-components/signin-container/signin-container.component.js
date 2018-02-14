"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var FeatureReducer = require("../../reducers");
var actions_1 = require("../../actions");
var models_1 = require("../../models");
var SigninContainerComponent = /** @class */ (function () {
    function SigninContainerComponent(
    //private configurationService: ConfigurationService,
    store) {
        this.store = store;
        this.form = models_1.Signin_ApiModel.Request.formGroup;
        this.captcha$ = this.store.select(FeatureReducer.getCaptcha);
    }
    SigninContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.captcha$
            .subscribe(function (data) {
            if (!(data.Captcha && data.Token))
                return;
            _this.form.patchValue({ Captcha: data.Captcha });
            _this.form.patchValue({ Token: data.Token.Token });
        });
    };
    SigninContainerComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new actions_1.ClearCaptcha());
    };
    SigninContainerComponent.prototype.authenticate = function (formValue) {
        debugger;
        this.store.dispatch(new actions_1.Signin(formValue));
    };
    SigninContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "\n        <auth-signin \n                [formGroup]='form'\n                (signedin)=\"authenticate($event)\"\n        ></auth-signin>\n        \n  "
                },] },
    ];
    /** @nocollapse */
    SigninContainerComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return SigninContainerComponent;
}());
exports.SigninContainerComponent = SigninContainerComponent;
//# sourceMappingURL=signin-container.component.js.map