"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { SocketService } from '@soushians/infra/socket';
var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
        // this.socketService.initSocket();
        // this.socketService.send("asdfasdf");
        // this.socketService.onConnect().subscribe(data=>{
        //         debugger;
        // })
        // this.socketService.onMessage().subscribe(data=>{
        //         debugger;
        // })
        this.signedin = new core_1.EventEmitter();
    }
    SigninComponent.prototype.signin = function (formGroup) {
        if (!formGroup.valid)
            return;
        this.signedin.emit(formGroup.value);
    };
    SigninComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "auth-signin",
                    template: "<div fxLayout='row' fxLayoutAlign=\"center center\">     <ngs-form-view          [id]=\"formId\"         (accept)=\"signin($event)\"     ></ngs-form-view> </div> <!-- <div>     <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a> </div> -->",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = function () { return []; };
    SigninComponent.propDecorators = {
        "signedin": [{ type: core_1.Output },],
        "formId": [{ type: core_1.Input },],
    };
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map