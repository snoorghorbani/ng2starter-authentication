"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Signin_ApiModel;
(function (Signin_ApiModel) {
    var Request = /** @class */ (function () {
        function Request() {
        }
        return Request;
    }());
    Signin_ApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response(params) {
            var _this = this;
            Object.keys(params).forEach(function (key) { return (_this[key] = params[key]); });
        }
        Response.prototype.extractData = function () {
            return this.Result.User;
        };
        return Response;
    }());
    Signin_ApiModel.Response = Response;
})(Signin_ApiModel = exports.Signin_ApiModel || (exports.Signin_ApiModel = {}));
//# sourceMappingURL=signin.api-model.js.map