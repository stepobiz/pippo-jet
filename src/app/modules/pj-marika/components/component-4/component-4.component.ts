import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'component-4',
    templateUrl: './component-4.component.html',
    styleUrls: ['./component-4.component.scss']
})
export class PjMkcomponent4Component implements OnInit {
    
    @Input()
    titolo: string | undefined;
    
    constructor() { } 

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