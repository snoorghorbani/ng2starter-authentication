"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Rx_1 = require("rxjs/Rx");
var material_1 = require("@angular/material");
var models_1 = require("../../models");
var authentication_module_configuration_1 = require("../../services/authentication-module-configuration");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var SIGNIN_RESPONSE = "[APP] SIGNIN_RESPONSE";
var SigninService = /** @class */ (function () {
    function SigninService(http, configurationService, snackBar) {
        this.http = http;
        this.configurationService = configurationService;
        this.snackBar = snackBar;
        this.SigninResponse = new BehaviorSubject_1.BehaviorSubject(new models_1.UserModel());
    }
    SigninService.prototype.signin = function (model) {
        var _this = this;
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.signIn != ""; })
            .take(1)
            .switchMap(function (config) { return _this.http.post(_this.configurationService.config.endpoints.signIn, model); })
            .map(function (response) {
            return _this.SigninResponse.next(new models_1.Signin_ApiModel.Response(response).extractData());
        })
            .catch(function (err) {
            if (err.status == 400) {
                _this.snackBar.open("کد امنیتی اشتباه است", null, {
                    duration: 5000
                });
            }
            else if (err.status == 403) {
                _this.snackBar.open(" شماره موبایل و یا کلمه عبور اشتباه است", null, {
                    duration: 5000
                });
            }
            return Rx_1.Observable.throw(err);
        });
    };
    SigninService.prototype.signout = function () {
        localStorage.removeItem(SIGNIN_RESPONSE);
        return this.http
            .get(this.configurationService.config.endpoints.signOut, {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    SigninService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    SigninService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
        { type: authentication_module_configuration_1.AuthenticationConfigurationService, },
        { type: material_1.MatSnackBar, },
    ]; };
    return SigninService;
}());
exports.SigninService = SigninService;
exports.SigninServiceStub = {};
//# sourceMappingURL=signin.service.js.map