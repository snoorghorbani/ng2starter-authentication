"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/do");
var core_1 = require("@angular/core");
var services_1 = require("../services");
// import { environment } from "../../../environments/environment";
var WithCredentialInterceptor = /** @class */ (function () {
    function WithCredentialInterceptor(configurationService) {
        this.configurationService = configurationService;
    }
    WithCredentialInterceptor.prototype.intercept = function (request, next) {
        // if (!this.configurationService.config.env.production)
        // if (!this.configurationService.config.env.production)
        request.withCredentials = true;
        return next.handle(request);
    };
    WithCredentialInterceptor.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    WithCredentialInterceptor.ctorParameters = function () { return [
        { type: services_1.AuthenticationConfigurationService, },
    ]; };
    return WithCredentialInterceptor;
}());
exports.WithCredentialInterceptor = WithCredentialInterceptor;
//# sourceMappingURL=with-credential.interceptor.js.map