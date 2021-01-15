import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'component-2',
    templateUrl: './component-2.component.html',
    styleUrls: ['./component-2.component.scss']
})
export class PjAaComponent2Component implements OnInit {
    @Input()
    titolo: string | undefined;

    constructor() { }

    ngOnInit(): void { }
}
