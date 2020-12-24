import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'pj-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class PjLoginComponent implements OnInit {
    constructor() { }
    hide = true;
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
    ngOnInit(): void { }
}