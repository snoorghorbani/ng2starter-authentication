"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgressingStarted = /** @class */ (function () {
    function ProgressingStarted() {
        this.type = "[AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
    }
    return ProgressingStarted;
}());
exports.ProgressingStarted = ProgressingStarted;
var ProgressingFinished = /** @class */ (function () {
    function ProgressingFinished() {
        this.type = "[AUTHENTICATION] PROGRESSING_FINISHED" /* PROGRESSING_FINISHED */;
    }
    return ProgressingFinished;
}());
exports.ProgressingFinished = ProgressingFinished;
var FailedHappened = /** @class */ (function () {
    function FailedHappened(payload) {
        this.payload = payload;
        this.type = "[AUTHENTICATION] FAILED_HAPPENED" /* FAILED_HAPPENED */;
    }
    return FailedHappened;
}());
exports.FailedHappened = FailedHappened;
//# sourceMappingURL=authentication.actions.js.map