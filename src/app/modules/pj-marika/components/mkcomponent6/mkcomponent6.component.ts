import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'component6',
    templateUrl: './component-6.component.html',
    styleUrls: ['./component-6.component.scss']
})
export class PjMkcomponent6Component implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    showcomponent1 = false;
    showcomponent2 = false;
    showcomponent3 = false;
    showcomponent4 = false;
    showcomponent5 = false;
    
    showcomponent(ncomponent:number) {
        this.showcomponent1 = false;
        this.showcomponent2 = false;
        this.showcomponent3 = false;
        this.showcomponent4 = false;
        this.showcomponent5 = false;

        switch (ncomponent) {
            case 1 : this.showcomponent1 = true; break;
            case 2 : this.showcomponent2 = true; break;
            case 3 : this.showcomponent3 = true; break;
            case 4 : this.showcomponent4 = true; break;
            case 5 : this.showcomponent5 = true; break;
        }
    }
    
}    