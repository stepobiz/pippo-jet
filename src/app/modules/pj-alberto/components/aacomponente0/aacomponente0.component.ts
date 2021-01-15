import { NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'aacomponente0',
    templateUrl: './aacomponente0.component.html',
    styleUrls: ['./aacomponente0.component.scss']
})
export class AAComponente0Component implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    componente1 = false;
    componente2 = false;
    componente3 = false;
    registrationForm = false;
    loginForm = false;

    showComponente(ncomponent: number) {
        this.componente1 = false;
        this.componente2 = false;
        this.componente3 = false;
        this.loginForm = false;
        this.registrationForm = false;

        switch (ncomponent) {
            case 1: this.componente1 = true; break;
            case 2: this.componente2 = true; break;
            case 3: this.componente3 = true; break;
            case 4: this.loginForm = true; break;
            case 5: this.registrationForm = true; break;
        }
    }
}