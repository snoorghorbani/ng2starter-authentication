import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpRequestBaseModel, HttpResponseBaseModel } from "@soushians/shared";
import { UserModel } from "../models";
export namespace Signin_ApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		constructor(params?: Request) {
			if (!params) return;
			Object.keys(params).forEach(key => ((<any>this)[key] = (<any>params)[key]));
		}

		getRequestBody() {
			return {};
		}
	}

	export class Response implements HttpResponseBaseModel<Response> {
		Result: {
			User: UserModel;
		};

		constructor(params: Response) {
			Object.keys(params).forEach(key => ((<any>this)[key] = (<any>params)[key]));
		}
		extractData(): UserModel {
			return this.Result.User;
		}
	}
}
