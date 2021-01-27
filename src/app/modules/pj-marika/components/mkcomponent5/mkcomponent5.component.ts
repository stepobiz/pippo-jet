import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'component5',
    templateUrl: './component-5.component.html',
    styleUrls: ['./component-5.component.scss']
})
export class PjMkcomponent5Component implements OnInit {
    constructor() { }

    hide = true;
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    ngOnInit(): void { }
}




