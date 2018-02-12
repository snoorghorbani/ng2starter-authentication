"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProgressingStarted {
    constructor() {
        this.type = "[AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
    }
}
exports.ProgressingStarted = ProgressingStarted;
class ProgressingFinished {
    constructor() {
        this.type = "[AUTHENTICATION] PROGRESSING_FINISHED" /* PROGRESSING_FINISHED */;
    }
}
exports.ProgressingFinished = ProgressingFinished;
class FailedHappened {
    constructor(payload) {
        this.payload = payload;
        this.type = "[AUTHENTICATION] FAILED_HAPPENED" /* FAILED_HAPPENED */;
    }
}
exports.FailedHappened = FailedHappened;
//# sourceMappingURL=authentication.actions.js.map