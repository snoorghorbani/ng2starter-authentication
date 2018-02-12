import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

import { TokenModel, CaptchaModel } from "../../models";

/**
 * 
 * 
 * @export
 * @class LoginService
 */
@Injectable()
export class CaptchaService {

        constructor(private http: HttpClient) { }

        getToken(): Observable<TokenModel> {
                return this.http.get("http://wifi.shatel.ir/api/v1/captcha/token", { withCredentials: true })
                        .map(response => response as TokenModel);
        }

}

export var CaptchaServiceStub = {
        /**
         * 
         * 
         * @param {string} username 
         * @param {string} password 
         * @returns 
         */
        login(username: string, password: string) { return "" }
}