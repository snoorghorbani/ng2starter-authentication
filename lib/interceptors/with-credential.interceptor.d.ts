import "rxjs/add/operator/do";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpEvent } from "@angular/common/http";
export declare class WithCredentialInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
