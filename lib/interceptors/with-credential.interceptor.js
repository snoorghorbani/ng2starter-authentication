"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/do");
var core_1 = require("@angular/core");
// import { environment } from "../../../environments/environment";
var WithCredentialInterceptor = /** @class */ (function () {
    function WithCredentialInterceptor() {
    }
    WithCredentialInterceptor.prototype.intercept = function (request, next) {
        // TODO:
        // if (!environment.production)
        // TODO:
        // if (!environment.production)
        request.withCredentials = true;
        return next.handle(request);
    };
    WithCredentialInterceptor.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    WithCredentialInterceptor.ctorParameters = function () { return []; };
    return WithCredentialInterceptor;
}());
exports.WithCredentialInterceptor = WithCredentialInterceptor;
//# sourceMappingURL=with-credential.interceptor.js.map