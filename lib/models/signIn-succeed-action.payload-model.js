"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
class SignInSucceedAction_PayloadModel extends user_model_1.UserModel {
    constructor(destinationRoute = '/') {
        super();
        this.destinationRoute = '/';
        this.destinationRoute = destinationRoute;
    }
}
exports.SignInSucceedAction_PayloadModel = SignInSucceedAction_PayloadModel;
//# sourceMappingURL=signIn-succeed-action.payload-model.js.map