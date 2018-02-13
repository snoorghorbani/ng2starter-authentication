import { FormGroup } from '@angular/forms';
import { HttpRequestBaseModel, HttpResponseBaseModel } from '@soushians/shared';
import { UserModel } from '../models';
export declare namespace Signin_ApiModel {
    class Request implements HttpRequestBaseModel<Request> {
        Email: string;
        Password: string;
        constructor(params?: Request);
        getRequestBody(): {
            Email: string;
            Password: string;
        };
        static readonly formGroup: FormGroup;
    }
    class Response implements HttpResponseBaseModel<Response> {
        Result: {
            StatusCode: number;
            User: UserModel;
            destinationRoute: string;
        };
        constructor(params: Response);
        extractData(): UserModel;
    }
}
