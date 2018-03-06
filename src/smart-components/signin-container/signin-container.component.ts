import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as FeatureReducer from "../../reducers";
import { Signin, ClearCaptcha } from "../../actions";
import { CaptchaModel } from "../../models";
import { SigninService, AuthenticationConfigurationService } from "../../services";

@Component({
	template: `
        <auth-signin 
                [formId]='(formId$ | async)'
                (signedin)="signIn($event)"
        ></auth-signin>
  `
})
export class SigninContainerComponent implements OnInit, OnDestroy {
	captcha$: Observable<CaptchaModel>;
	formId$: Observable<string>;
	constructor(
		private configurationService: AuthenticationConfigurationService,
		private store: Store<FeatureReducer.FeatureState>
	) {
		this.formId$ = this.configurationService.config$.map(config => config.forms.signIn);
		this.captcha$ = this.store.select(FeatureReducer.getCaptcha);
	}

	ngOnInit() {
		this.captcha$
			// .skipWhile(data => !!(data.Captcha && data.Token))
			.subscribe(data => {
				if (!(data.Captcha && data.Token)) return;
				// this.form.patchValue({ Captcha: data.Captcha });
				// this.form.patchValue({ Token: data.Token.Token });
			});
	}
	ngOnDestroy() {
		this.store.dispatch(new ClearCaptcha());
	}

	signIn(formValue: any) {
		this.store.dispatch(new Signin(formValue));
	}
}
