import { UserModel } from "./user.model";
export declare class SignInSucceedAction_PayloadModel extends UserModel {
    destinationRoute?: string;
    constructor(destinationRoute?: string);
}
