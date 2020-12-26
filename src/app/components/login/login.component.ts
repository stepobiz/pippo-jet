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

    nations = [
        {value: 'Australia', viewValue: 'Australia'},
        {value: 'Belgium', viewValue: 'Belgio'},
        {value: 'Botswana', viewValue: 'Botswana'},
        {value: 'Canada', viewValue: 'Canada'},
        {value: 'China', viewValue: 'Cina'},
        {value: 'Colombia', viewValue: 'Colombia'},
        {value: 'France', viewValue: 'Francia'},
        {value: 'Germany', viewValue: 'Germania'},
        {value: 'Italy', viewValue: 'Italia'},
        {value: 'Spain', viewValue: 'Spagna'},
        {value: 'Southafrica', viewValue: 'Sudafrica'},
        {value: 'USA', viewValue: 'Torino'}         
    ];

    ngOnInit(): void { }
}