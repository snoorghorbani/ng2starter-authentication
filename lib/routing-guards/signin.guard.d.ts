import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromAuth from '../reducers';
export declare class SigninGuard implements CanActivate {
    private store;
    constructor(store: Store<fromAuth.FeatureState>);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
