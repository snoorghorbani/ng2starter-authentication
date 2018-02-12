import { EventEmitter } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { AbstractControl } from '@angular/forms/src/model';
export declare class SigninComponent {
    signedin: EventEmitter<{}>;
    formGroup: FormGroup;
    readonly Email: AbstractControl;
    readonly Password: AbstractControl;
    signin(): void;
    constructor();
}
