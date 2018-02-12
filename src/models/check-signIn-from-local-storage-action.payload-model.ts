export class CheckSignInFromLocalStorageAction_PayloadModel {
    destinationRoute: string = '/';

    constructor(destinationRoute: string = '/') {
        this.destinationRoute = destinationRoute;
    }

}