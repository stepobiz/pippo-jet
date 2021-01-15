import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'component-4',
    templateUrl: './component-4.component.html',
    styleUrls: ['./component-4.component.scss']
})
export class PjAaComponent4Component implements OnInit {
    @Input()
    titolo: string | undefined;

    constructor(
        private _formBuilder: FormBuilder
    ) {
        this.loginFormGroup = this._formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required]]
        })
    }

    loginFormGroup: FormGroup;

    ngOnInit(): void { }

}