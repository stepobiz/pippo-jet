import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'component3',
    templateUrl: './component-3.component.html',
    styleUrls: ['./component-3.component.scss']
})
export class PjGtComponent3Component implements OnInit {
    loginFormGroup: FormGroup;
    constructor(
        private _formBuilder: FormBuilder,
    ) {
        this.loginFormGroup = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }
    ngOnInit(): void { }

    login() {
        if (!this.loginFormGroup.valid) {
            return;
        }
    }
}