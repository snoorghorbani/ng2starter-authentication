"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var Signin_ApiModel;
(function (Signin_ApiModel) {
    var Request = /** @class */ (function () {
        function Request(params) {
            var _this = this;
            if (!params)
                return;
            Object.keys(params).forEach(function (key) { return (_this[key] = params[key]); });
        }
        Request.prototype.getRequestBody = function () {
            return {
                Email: this.Email,
                Password: this.Password
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: function () {
                return new forms_1.FormGroup({
                    Email: new forms_1.FormControl('', [forms_1.Validators.required]),
                    Password: new forms_1.FormControl('', [forms_1.Validators.required])
                });
            },
            enumerable: true,
            configurable: true
        });
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