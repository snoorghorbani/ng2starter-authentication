import { MemoizedSelector } from "@ngrx/store";
import * as userReducer from "./user.reducer";
import * as captchaReducer from "./captcha.reducer";
import { UserModel, CaptchaModel } from "../models";
export interface AuthenticationState {
    userStatus: userReducer.State;
    captcha: captchaReducer.State;
}
export interface FeatureState {
    "authentication": AuthenticationState;
}
export declare const AuthenticationReducers: {
    userStatus: typeof userReducer.UserReducer;
    captcha: typeof captchaReducer.CaptchaReducer;
};
export declare const selectAuthenticationState: MemoizedSelector<object, AuthenticationState>;
export declare const selectAuthState: MemoizedSelector<object, userReducer.State>;
export declare const getLoggedIn: MemoizedSelector<object, boolean>;
export declare const getUser: MemoizedSelector<object, UserModel>;
export declare const selectCaptchaState: MemoizedSelector<object, captchaReducer.State>;
export declare const getCaptcha: MemoizedSelector<object, CaptchaModel>;
