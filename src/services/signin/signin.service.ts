import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { MatSnackBar } from '@angular/material';
import { ObserveContent } from '@angular/cdk/observers';

// import { environment } from "../../../../environments/environment";

import { Signin_ApiModel, UserModel } from '../../models';
import { AuthenticationConfigurationService } from '../../services/authentication-module-configuration';

const SIGNIN_RESPONSE = '[APP] SIGNIN_RESPONSE';

@Injectable()
export class SigninService {
	constructor(
		private http: HttpClient,
		private configurationService: AuthenticationConfigurationService,
		private snackBar: MatSnackBar
	) {}

	SigninResponse: any;
	signin(data: Signin_ApiModel.Request): Observable<UserModel> {
		var model = new Signin_ApiModel.Request(data);
		return this.http
			.post(this.configurationService.config.endpoints.signIn, model.getRequestBody())
			.map(
				(response: Signin_ApiModel.Response) =>
					(this.SigninResponse = new Signin_ApiModel.Response(response).extractData())
			)
			.catch((err) => {
				if (err.status == 400) {
					this.snackBar.open('کد امنیتی اشتباه است', null, {
						duration: 5000
					});
				} else if (err.status == 403) {
					this.snackBar.open(' شماره موبایل و یا کلمه عبور اشتباه است', null, {
						duration: 5000
					});
				}
				return Observable.throw(err);
			});

		// const promise = new Promise((resolve, reject) => {
		//         if (model.Username == 'user' && model.Password == 'user') {
		//                 var resolveData = new Signin_ApiModel.Response({ Result: true, user: { Roles: ['User'], Username: 'UserTest' } as UserModel });
		//                 resolve(resolveData);
		//         } else if (model.Username == 'agent' && model.Password == 'agent') {
		//                 var resolveData = new Signin_ApiModel.Response({ Result: true, user: { Roles: ['Agent'], Username: 'AgentTest' } as UserModel });
		//                 resolve(resolveData);
		//         } else if (model.Username == 'admin' && model.Password == 'admin') {
		//                 var resolveData = new Signin_ApiModel.Response({ Result: true, user: { Roles: ['Admin'], Username: 'AdminTest' } as UserModel });
		//                 resolve(resolveData);
		//         } else {
		//                 var rejectData = {
		//                         status: 403,
		//                 };
		//                 reject(rejectData);
		//         }
		// });

		// return Observable.fromPromise(promise)
		//         .map(response => this.SigninResponse = response as Signin_ApiModel.Response)
		//         .catch(err => {
		//                 if (err.status == 400) {
		//                         this.snackBar.open('کد امنیتی اشتباه است', null, {
		//                                 duration: 5000
		//                         })
		//                 } else if (err.status == 403) {
		//                         this.snackBar.open(' شماره موبایل و یا کلمه عبور اشتباه است', null, {
		//                                 duration: 5000
		//                         })

		//                 }
		//                 return Observable.throw(err)
		//         })
	}

	signout(): Observable<any> {
		localStorage.removeItem(SIGNIN_RESPONSE);
		return this.http
			.get(this.configurationService.config.endpoints.signOut, {
				withCredentials: true
			})
			.map((response) => response);
	}

	is_user(): boolean {
		return this.SigninResponse && (this.SigninResponse.Roles as any).includes('User');
	}

	is_agent(): boolean {
		return this.SigninResponse && (this.SigninResponse.Roles as any).includes('Agent');
	}
	is_admin(): boolean {
		return this.SigninResponse && (this.SigninResponse.Roles as any).includes('Admin');
	}

	// getProfileInformation(): Observable<any> {
	//         return this.http.get(this.configurationService.config.endpoints.UserInformation, {
	//                 withCredentials: true
	//         })
	//                 .map(response => response as Signin_ApiModel.Response)
	//                 .catch(err => {
	//                         return Observable.throw('401');
	//                 });
	// }
}

export var SigninServiceStub = {};
