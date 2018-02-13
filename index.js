// export { CaptchaComponent } from "./lib/dump-components";
// export { SignInActionTypes, SignoutAction, AuthenticationActionTypes } from './lib/actions';
// export * from "./lib/authentication.config";
// export * from "./lib/reducers";
// export * from "./lib/authentication.module";

exports.AuthenticationModule        = require("./lib/authentication.module");
exports.AuthenticationModuleConfig  = require("./lib/authentication.module");
exports.reducers                    = require("./lib/reducers");
exports.services                    = require("./lib/services");
exports.CaptchaComponent            = require("./lib/dump-components").CaptchaComponent;
exports.SignInActionTypes           = require("./lib/actions").SignInActionTypes;
exports.SignoutAction               = require("./lib/actions").SignoutAction;
exports.AuthenticationActionTypes   = require("./lib/actions").AuthenticationActionTypes;