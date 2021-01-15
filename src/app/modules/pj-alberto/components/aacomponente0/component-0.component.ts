import { NgSwitch } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'component-0',
    templateUrl: './component-0.component.html',
    styleUrls: ['./component-0.component.scss']
})
export class PjAaComponent0Component implements OnInit {
    testoDaMostrare1 :string = "i maiali sono rosa";
    testoDaMostrare2 :string = "il sole è giallo";
    testoDaMostrare3 :string = "il cielo è azzurro";
    testoDaMostrare4 :string = "i sassi sono grigi";
    testoDaMostrare5 :string = "l'erba è verde";

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