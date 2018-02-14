"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
/**
 *
 *
 * @export
 * @class LoginService
 */
var CaptchaService = /** @class */ (function () {
    function CaptchaService(http) {
        this.http = http;
    }
    CaptchaService.prototype.getToken = function () {
        return this.http.get("http://wifi.shatel.ir/api/v1/captcha/token", { withCredentials: true })
            .map(function (response) { return response; });
    };
    CaptchaService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    CaptchaService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
    ]; };
    return CaptchaService;
}());
exports.CaptchaService = CaptchaService;
exports.CaptchaServiceStub = {
    /**
     *
     *
     * @param {string} username
     * @param {string} password
     * @returns
     */
    login: /**
             *
             *
             * @param {string} username
             * @param {string} password
             * @returns
             */
    function (username, password) { return ""; }
};
//# sourceMappingURL=captcha.service.js.map