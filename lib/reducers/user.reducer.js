"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../actions");
var models_1 = require("../models");
exports.initialState = {
    loggedIn: false,
    user: new models_1.UserModel({ Id: 1 })
};
function UserReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case actions_1.SignInActionTypes.SIGNIN_SUCCEED: {
            return __assign({}, state, { loggedIn: true, user: action.payload });
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
exports.getLoggedIn = function (state) { return state.loggedIn; };
exports.getUser = function (state) { return state.user; };
//#endregion
//# sourceMappingURL=user.reducer.js.map