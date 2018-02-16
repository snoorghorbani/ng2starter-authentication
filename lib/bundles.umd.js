(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var dump_components_1 = require("./dump-components");
exports.CaptchaComponent = dump_components_1.CaptchaComponent;
var actions_1 = require("./actions");
exports.SignInActionTypes = actions_1.SignInActionTypes;
exports.SignoutAction = actions_1.SignoutAction;
var models_1 = require("./models");
exports.UserModel = models_1.UserModel;
__export(require("./authentication.config"));
__export(require("./reducers"));
__export(require("./authentication.module"));
__export(require("./services"));

})));
