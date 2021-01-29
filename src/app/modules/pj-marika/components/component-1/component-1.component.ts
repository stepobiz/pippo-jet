import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'component-1',
    templateUrl: './component-1.component.html',
    styleUrls: ['./component-1.component.scss']
})
export class PjMkcomponent1Component implements OnInit {
   
    @Input()
    titolo: string | undefined;
    
    constructor() { }

    ngOnInit(): void { }
}
