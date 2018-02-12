import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRequestBaseModel, HttpResponseBaseModel } from '@ng2-starter/shared';
import { UserModel } from '../models';
export namespace Signin_ApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		Email: string;
		Password: string;

		constructor(params?: Request) {
			if (!params) return;
			Object.keys(params).forEach((key) => ((<any>this)[key] = (<any>params)[key]));
		}

		getRequestBody() {
			return {
				Email: this.Email,
				Password: this.Password
			};
		}
		static get formGroup() {
			return new FormGroup({
				Email: new FormControl('', [ Validators.required ]),
				Password: new FormControl('', [ Validators.required ])
			});
		}
	}

	export class Response implements HttpResponseBaseModel<Response> {
		Result: {
			StatusCode: number;
			User: UserModel;
			destinationRoute: string;
		};

		constructor(params: Response) {
			Object.keys(params).forEach((key) => ((<any>this)[key] = (<any>params)[key]));
		}
		extractData(): UserModel {
			return this.Result.User;
		}
	}
}
