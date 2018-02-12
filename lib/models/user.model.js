"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(params) {
        // IdentificationNo: string;
        // IdentifierType: string;
        // RegisterDate: string;
        // UserType: string;
        this.Roles = [];
        params &&
            Object.keys(params).forEach((key) => {
                if (key in params)
                    this[key] = params[key];
            });
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map