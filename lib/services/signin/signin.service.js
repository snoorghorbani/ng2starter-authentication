"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const Rx_1 = require("rxjs/Rx");
const material_1 = require("@angular/material");
// import { environment } from "../../../../environments/environment";
const models_1 = require("../../models");
const authentication_module_configuration_1 = require("../../services/authentication-module-configuration");
const SIGNIN_RESPONSE = '[APP] SIGNIN_RESPONSE';
let SigninService = class SigninService {
    constructor(http, configurationService, snackBar) {
        this.http = http;
        this.configurationService = configurationService;
        this.snackBar = snackBar;
    }
    signin(data) {
        var model = new models_1.Signin_ApiModel.Request(data);
        return this.http
            .post(this.configurationService.config.endpoints.signIn, model.getRequestBody())
            .map((response) => (this.SigninResponse = new models_1.Signin_ApiModel.Response(response).extractData()))
            .catch((err) => {
            if (err.status == 400) {
                this.snackBar.open('کد امنیتی اشتباه است', null, {
                    duration: 5000
                });
            }
            else if (err.status == 403) {
                this.snackBar.open(' شماره موبایل و یا کلمه عبور اشتباه است', null, {
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
    }
    signout() {
        localStorage.removeItem(SIGNIN_RESPONSE);
        return this.http
            .get(this.configurationService.config.endpoints.signOut, {
            withCredentials: true
        })
            .map((response) => response);
    }
    is_user() {
        return this.SigninResponse && this.SigninResponse.Roles.includes('User');
    }
    is_agent() {
        return this.SigninResponse && this.SigninResponse.Roles.includes('Agent');
    }
    is_admin() {
        return this.SigninResponse && this.SigninResponse.Roles.includes('Admin');
    }
};
SigninService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient,
        authentication_module_configuration_1.AuthenticationConfigurationService,
        material_1.MatSnackBar])
], SigninService);
exports.SigninService = SigninService;
exports.SigninServiceStub = {};
//# sourceMappingURL=signin.service.js.map