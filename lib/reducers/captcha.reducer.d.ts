import { CaptchaAction } from '../actions';
import { CaptchaModel } from '../models';
export interface State {
    captcha: CaptchaModel;
}
export declare const initialState: State;
export declare function CaptchaReducer(state: State, action: CaptchaAction): State;
export declare const getCaptcha: (state: State) => CaptchaModel;
