"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Rx_1 = require("rxjs/Rx");
var material_1 = require("@angular/material");
var models_1 = require("../../models");
var authentication_module_configuration_1 = require("../../services/authentication-module-configuration");
var SIGNIN_RESPONSE = '[APP] SIGNIN_RESPONSE';
var SigninService = /** @class */ (function () {
    function SigninService(http, configurationService, snackBar) {
        this.http = http;
        this.configurationService = configurationService;
        this.snackBar = snackBar;
    }
    SigninService.prototype.signin = function (data) {
        var _this = this;
        var model = new models_1.Signin_ApiModel.Request(data);
        return this.http
            .post(this.configurationService.config.endpoints.signIn, model.getRequestBody())
            .map(function (response) {
            return (_this.SigninResponse = new models_1.Signin_ApiModel.Response(response).extractData());
        })
            .catch(function (err) {
            if (err.status == 400) {
                _this.snackBar.open('کد امنیتی اشتباه است', null, {
                    duration: 5000
                });
            }
            else if (err.status == 403) {
                _this.snackBar.open(' شماره موبایل و یا کلمه عبور اشتباه است', null, {
                    duration: 5000
                });
            }
            return Rx_1.Observable.throw(err);
        });
        // const promise = new Promise((resolve, reject) => {
        //         if (model.Username == 'user' && model.Password == 'user') {
        //                 var resolveData = new Signin_ApiModel.Response({ Result: true, user: { Roles: ['User'], Username: 'UserTest' } as UserModel });
        //                 resolve(resolveData);
        //         } else if (model.Username == 'agent' && model.Password == 'agent') {
        //                 var resolveData = new Signin_ApiModel.Response({ Result: true, user: { Roles: ['Agent'], Username: 'AgentTest' } as UserModel });
        //                 resolve(resolveData);
        //         } else if (model.Username == 'admin' && model.Password == 'admin') {
        //                 var resolveData = new Signin_ApiModel.Response({ Result: true, user: { Roles: ['Admin'], Username: 'AdminTest' } as UserModel });
        //                 resolve(resolveData);
        //         } else {
        //                 var rejectData = {
        //                         status: 403,
        //                 };
        //                 reject(rejectData);
        //         }
        // });
        // return Observable.fromPromise(promise)
        //         .map(response => this.SigninResponse = response as Signin_ApiModel.Response)
        //         .catch(err => {
        //                 if (err.status == 400) {
        //                         this.snackBar.open('کد امنیتی اشتباه است', null, {
        //                                 duration: 5000
        //                         })
        //                 } else if (err.status == 403) {
        //                         this.snackBar.open(' شماره موبایل و یا کلمه عبور اشتباه است', null, {
        //                                 duration: 5000
        //                         })
        //                 }
        //                 return Observable.throw(err)
        //         })
    };
    SigninService.prototype.signout = function () {
        localStorage.removeItem(SIGNIN_RESPONSE);
        return this.http
            .get(this.configurationService.config.endpoints.signOut, {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    SigninService.prototype.is_user = function () {
        return this.SigninResponse && this.SigninResponse.Roles.includes('User');
    };
    SigninService.prototype.is_agent = function () {
        return this.SigninResponse && this.SigninResponse.Roles.includes('Agent');
    };
    SigninService.prototype.is_admin = function () {
        return this.SigninResponse && this.SigninResponse.Roles.includes('Admin');
    };
    SigninService.decorators = [
        { type: core_1.Injectable },
    ];
    // getProfileInformation(): Observable<any> {
    //         return this.http.get(this.configurationService.config.endpoints.UserInformation, {
    //                 withCredentials: true
    //         })
    //                 .map(response => response as Signin_ApiModel.Response)
    //                 .catch(err => {
    //                         return Observable.throw('401');
    //                 });
    // }
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