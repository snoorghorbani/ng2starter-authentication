import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from "../../models";
/**
 *
 *
 * @export
 * @class LoginService
 */
export declare class CaptchaService {
    private http;
    constructor(http: HttpClient);
    getToken(): Observable<TokenModel>;
}
export declare var CaptchaServiceStub: {
    login(username: string, password: string): string;
};
