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
/**
 *
 *
 * @export
 * @class LoginService
 */
let CaptchaService = class CaptchaService {
    constructor(http) {
        this.http = http;
    }
    getToken() {
        return this.http.get("http://wifi.shatel.ir/api/v1/captcha/token", { withCredentials: true })
            .map(response => response);
    }
};
CaptchaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], CaptchaService);
exports.CaptchaService = CaptchaService;
exports.CaptchaServiceStub = {
    /**
     *
     *
     * @param {string} username
     * @param {string} password
     * @returns
     */
    login(username, password) { return ""; }
};
//# sourceMappingURL=captcha.service.js.map