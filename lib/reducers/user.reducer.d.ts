import { SigninAction } from '../actions';
import { UserModel } from '../models';
export interface State {
    loggedIn: boolean;
    user: UserModel;
}
export declare const initialState: State;
export declare function UserReducer(state: State, action: SigninAction): State;
export declare const getLoggedIn: (state: State) => boolean;
export declare const getUser: (state: State) => UserModel;
