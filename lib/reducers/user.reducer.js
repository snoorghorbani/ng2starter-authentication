"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../actions");
const models_1 = require("../models");
exports.initialState = {
    loggedIn: false,
    user: new models_1.UserModel({ Id: 1 })
};
function UserReducer(state = exports.initialState, action) {
    switch (action.type) {
        case actions_1.SignInActionTypes.SIGNIN_SUCCEED: {
            return Object.assign({}, state, { loggedIn: true, user: action.payload });
        }
        case actions_1.SignInActionTypes.SIGNOUT: {
            return exports.initialState;
        }
        default: {
            return state;
        }
    }
}
exports.UserReducer = UserReducer;
//#region  selectors
exports.getLoggedIn = (state) => state.loggedIn;
exports.getUser = (state) => state.user;
//#endregion 
//# sourceMappingURL=user.reducer.js.map