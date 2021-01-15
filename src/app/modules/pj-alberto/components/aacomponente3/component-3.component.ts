import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'component-3',
    templateUrl: './component-3.component.html',
    styleUrls: ['./component-3.component.scss']
})
export class PjAaComponent3Component implements OnInit {
    @Input()
    titolo: string | undefined;

    constructor() { }

    ngOnInit(): void { }
}
