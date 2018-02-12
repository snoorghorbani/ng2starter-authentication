import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { MatSnackBar } from '@angular/material';
import { Signin_ApiModel, UserModel } from '../../models';
import { AuthenticationConfigurationService } from '../../services/authentication-module-configuration';
export declare class SigninService {
    private http;
    private configurationService;
    private snackBar;
    constructor(http: HttpClient, configurationService: AuthenticationConfigurationService, snackBar: MatSnackBar);
    SigninResponse: any;
    signin(data: Signin_ApiModel.Request): Observable<UserModel>;
    signout(): Observable<any>;
    is_user(): boolean;
    is_agent(): boolean;
    is_admin(): boolean;
}
export declare var SigninServiceStub: {};
