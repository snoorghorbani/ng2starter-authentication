"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
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
    Object.defineProperty(SigninComponent.prototype, "Email", {
        get: function () { return this.formGroup.get('Email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninComponent.prototype, "Password", {
        get: function () { return this.formGroup.get('Password'); },
        enumerable: true,
        configurable: true
    });
    SigninComponent.prototype.signin = function () {
        if (!this.formGroup.valid)
            return;
        this.signedin.emit(this.formGroup.value);
    };
    SigninComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'auth-signin',
                    template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"signin()\" fxLayout=\"column\">     <div fxLayout='row' fxLayoutAlign=\"center center\">          <mat-card fxFlex='1 1 300px'>             <mat-card-header>                 <mat-card-title>\u0648\u0631\u0648\u062F \u0628\u0647 \u067E\u0646\u0644 \u0645\u062F\u06CC\u0631\u06CC\u062A</mat-card-title>             </mat-card-header>             <mat-card-content>                 <mat-input-container fxFlexFill>                     <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC\" formControlName=\"Email\">                     <mat-error *ngIf=\"Email.invalid && (Email.dirty || Email.touched)\" class=\"alert alert-danger\">                         <div *ngIf=\"Email.errors.required\">                             \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A.                         </div>                     </mat-error>                 </mat-input-container>                 <mat-input-container fxFlexFill>                     <input type=\"password\" matInput placeholder=\"\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Password\">                     <mat-error *ngIf=\"Password.invalid && (Password.dirty || Password.touched)\" class=\"alert alert-danger\">                         <div *ngIf=\"Password.errors.required\">                             \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A.                         </div>                     </mat-error>                 </mat-input-container>                 <!-- <auth-captcha-container></auth-captcha-container> -->             </mat-card-content>             <mat-card-actions>                 <button fxFlex type=\"submit\" mat-raised-button color=\"primary\">\u0648\u0631\u0648\u062F</button>             </mat-card-actions>         </mat-card>      </div> </form> <!-- <div>     <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a> </div> -->",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = function () { return []; };
    SigninComponent.propDecorators = {
        "signedin": [{ type: core_1.Output },],
        "formGroup": [{ type: core_1.Input },],
    };
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map