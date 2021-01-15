import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'componente3gg',
    templateUrl: './componente3gg.component.html',
    styleUrls: ['./componente3gg.component.scss']
})
export class componente3ggComponent implements OnInit {
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