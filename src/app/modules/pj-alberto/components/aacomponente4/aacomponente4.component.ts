import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'aacomponente4',
    templateUrl: './aacomponente4.component.html',
    styleUrls: ['./aacomponente4.component.scss']
})
export class AAComponente4Component implements OnInit {
    constructor(
        private _formBuilder: FormBuilder
    ) {
        this.loginFormGroup = this._formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required]]
        })
    }

    loginFormGroup: FormGroup;

    ngOnInit(): void {}

}