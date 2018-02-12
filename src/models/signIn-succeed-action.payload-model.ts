import { UserModel } from "./user.model";

export class SignInSucceedAction_PayloadModel extends UserModel  {
    destinationRoute?: string = '/';

    constructor(destinationRoute: string = '/') {
        super()
        this.destinationRoute = destinationRoute;
    }

}