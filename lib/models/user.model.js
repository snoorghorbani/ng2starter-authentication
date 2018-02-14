"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel = /** @class */ (function () {
    function UserModel(params) {
        var _this = this;
        // IdentificationNo: string;
        // IdentifierType: string;
        // RegisterDate: string;
        // UserType: string;
        this.Roles = [];
        params &&
            Object.keys(params).forEach(function (key) {
                if (key in params)
                    _this[key] = params[key];
            });
    }
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map