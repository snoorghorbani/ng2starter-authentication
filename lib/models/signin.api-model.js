"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
var Signin_ApiModel;
(function (Signin_ApiModel) {
    class Request {
        constructor(params) {
            if (!params)
                return;
            Object.keys(params).forEach((key) => (this[key] = params[key]));
        }
        getRequestBody() {
            return {
                Email: this.Email,
                Password: this.Password
            };
        }
        static get formGroup() {
            return new forms_1.FormGroup({
                Email: new forms_1.FormControl('', [forms_1.Validators.required]),
                Password: new forms_1.FormControl('', [forms_1.Validators.required])
            });
        }
    }
    Signin_ApiModel.Request = Request;
    class Response {
        constructor(params) {
            Object.keys(params).forEach((key) => (this[key] = params[key]));
        }
        extractData() {
            return this.Result.User;
        }
    }
    Signin_ApiModel.Response = Response;
})(Signin_ApiModel = exports.Signin_ApiModel || (exports.Signin_ApiModel = {}));
//# sourceMappingURL=signin.api-model.js.map