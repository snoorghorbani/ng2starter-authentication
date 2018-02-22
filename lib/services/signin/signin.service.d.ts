import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { MatSnackBar } from "@angular/material";
import { Signin_ApiModel, UserModel } from "../../models";
import { AuthenticationConfigurationService } from "../../services/authentication-module-configuration";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export declare class SigninService {
    private http;
    private configurationService;
    private snackBar;
    SigninResponse: BehaviorSubject<UserModel>;
    constructor(http: HttpClient, configurationService: AuthenticationConfigurationService, snackBar: MatSnackBar);
    signin(data: Signin_ApiModel.Request): Observable<UserModel>;
    signout(): Observable<any>;
    is_role(role: string): Observable<boolean>;
}
export declare var SigninServiceStub: {};
